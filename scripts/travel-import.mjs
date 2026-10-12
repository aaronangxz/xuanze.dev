#!/usr/bin/env node
/**
 * Turns a Flighty export and an AwayBook export into src/data/travel/travel.json.
 *
 *   node scripts/travel-import.mjs --flights ~/Downloads/Flighty_Export.csv --stays ~/Downloads/Stays.csv
 *
 * Only what the site shows is written: no booking references, tail numbers, gates, room numbers
 * or prices. Airport coordinates come from OurAirports (downloaded, or --airports <file>).
 * Everything hand-maintained lives in src/data/travel/config.json.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = resolve(root, 'src/data/travel/travel.json');
const config = JSON.parse(readFileSync(resolve(root, 'src/data/travel/config.json'), 'utf8'));

const args = Object.fromEntries(process.argv.slice(2).reduce((acc, a, i, all) => (a.startsWith('--') ? [...acc, [a.slice(2), all[i + 1]]] : acc), []));
if (!args.flights || !args.stays) {
  console.error('Usage: node scripts/travel-import.mjs --flights <Flighty CSV> --stays <AwayBook CSV> [--airports <OurAirports CSV>]');
  process.exit(1);
}

/** RFC 4180-ish CSV: quoted fields, doubled quotes, CRLF. */
function parseCSV(text) {
  const rows = [];
  let row = [], field = '', quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') quoted = false;
      else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ',') { row.push(field); field = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(field); field = '';
      if (row.some((f) => f !== '')) rows.push(row);
      row = [];
    } else field += c;
  }
  if (field !== '' || row.length) { row.push(field); if (row.some((f) => f !== '')) rows.push(row); }
  const [head, ...body] = rows;
  return body.map((r) => Object.fromEntries(head.map((h, i) => [h.trim(), (r[i] ?? '').trim()])));
}

const fail = (msg) => { console.error(`✗ ${msg}`); process.exit(1); };

/* ---------- airports ---------- */
const airportsCSV = args.airports
  ? readFileSync(args.airports, 'utf8')
  : await (await fetch('https://raw.githubusercontent.com/davidmegginson/ourairports-data/main/airports.csv')).text();
const ourAirports = new Map(parseCSV(airportsCSV).filter((a) => a.iata_code).map((a) => [a.iata_code, a]));

const flightsRaw = parseCSV(readFileSync(args.flights, 'utf8'));
const staysRaw = parseCSV(readFileSync(args.stays, 'utf8'));

const airports = {};
for (const code of [...new Set(flightsRaw.flatMap((f) => [f.From, f.To]))].sort()) {
  const city = config.airports[code] ?? fail(`No city for airport ${code}: add it to "airports" in config.json`);
  const o = config.airportOverrides[code];
  const a = ourAirports.get(code);
  if (!o && !a) fail(`OurAirports has no ${code}: add it to "airportOverrides" in config.json`);
  airports[code] = {
    city,
    country: o?.country ?? a.iso_country,
    lat: +(o?.lat ?? a.latitude_deg),
    lon: +(o?.lon ?? a.longitude_deg),
  };
}

const R = 6371;
const rad = (d) => (d * Math.PI) / 180;
const km = (a, b) => {
  const h = Math.sin(rad(b.lat - a.lat) / 2) ** 2 + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(rad(b.lon - a.lon) / 2) ** 2;
  return Math.round(2 * R * Math.asin(Math.sqrt(h)));
};
const title = (s) => s.toLowerCase().split('_').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ');

/* ---------- flights ---------- */
const flights = flightsRaw
  .filter((f) => f.Canceled !== 'true')
  .map((f) => {
    const [iata, name] = config.airlines[f.Airline] ?? fail(`Unknown airline ${f.Airline}: add it to "airlines" in config.json`);
    const to = f['Diverted To'] || f.To;
    return {
      date: f.Date,
      airline: name,
      flight: `${iata} ${f.Flight}`,
      from: f.From,
      to,
      km: km(airports[f.From], airports[to]),
      aircraft: f['Aircraft Type Name'] || undefined,
      cabin: f['Cabin Class'] ? title(f['Cabin Class']) : undefined,
      seat: f.Seat || undefined,
      // Ordering only (local times): used to infer overland legs, not written out.
      _dep: (f['Gate Departure (Scheduled)'] || `${f.Date}T12:00`).slice(0, 10),
      _arr: (f['Gate Arrival (Scheduled)'] || f['Gate Departure (Scheduled)'] || `${f.Date}T12:00`).slice(0, 10),
    };
  })
  .sort((a, b) => a.date.localeCompare(b.date));

/* ---------- stays ---------- */
const excluded = new Set(config.excludeStays);
const stays = staysRaw
  .filter((s) => !excluded.has(`${s['Hotel Name']}|${s['Check-in Date']}`))
  .map((s) => {
    const key = `${s.City}|${s['Country / Region']}`;
    const place = config.places[key] ?? fail(`No place for "${key}": add it to "places" in config.json`);
    const brand = s['Hotel Brand'];
    if (!(brand in config.brandTags)) fail(`No tag for brand "${brand}": add it to "brandTags" in config.json`);
    return {
      name: s['Hotel Name'],
      brand: brand === 'Other' ? undefined : brand,
      chain: s['Hotel Chain'] === 'Other' ? undefined : s['Hotel Chain'],
      tag: config.brandTags[brand] || undefined,
      city: place.city,
      country: config.countryCodes[s['Country / Region']] ?? fail(`No code for country "${s['Country / Region']}"`),
      lat: place.lat,
      lon: place.lon,
      checkIn: s['Check-in Date'],
      checkOut: s['Check-out Date'],
      nights: +s.Nights,
    };
  })
  .sort((a, b) => a.checkIn.localeCompare(b.checkIn));

/* ---------- overland legs ----------
   Walk every place in time order. Same-day order: check out, depart, arrive, check in.
   A leg never starts at a departure or ends at an arrival (that stretch is the flight). */
const events = [
  ...flights.flatMap((f) => [
    { day: f._dep, rank: 1, kind: 'dep', at: airports[f.from], label: airports[f.from].city },
    { day: f._arr, rank: 2, kind: 'arr', at: airports[f.to], label: airports[f.to].city },
  ]),
  ...stays.flatMap((s) => [
    { day: s.checkIn, rank: 3, kind: 'in', at: s, label: s.city },
    { day: s.checkOut, rank: 0, kind: 'out', at: s, label: s.city },
  ]),
].sort((a, b) => a.day.localeCompare(b.day) || a.rank - b.rank);

const days = (a, b) => (Date.parse(b) - Date.parse(a)) / 864e5;
const ground = [];
for (let i = 1; i < events.length; i++) {
  const a = events[i - 1], b = events[i];
  if (a.kind === 'dep' || b.kind === 'arr') continue;
  const d = km(a.at, b.at);
  if (d < config.ground.minKm || days(a.day, b.day) > config.ground.maxDays) continue;
  ground.push({
    date: b.day, from: a.label, to: b.label, km: d,
    a: [+a.at.lon.toFixed(4), +a.at.lat.toFixed(4)], b: [+b.at.lon.toFixed(4), +b.at.lat.toFixed(4)],
  });
}

for (const f of flights) { delete f._dep; delete f._arr; }
writeFileSync(out, JSON.stringify({ generated: new Date().toISOString().slice(0, 10), airports, flights, stays, ground }, null, 2) + '\n');
console.log(`✓ ${flights.length} flights, ${stays.length} stays, ${ground.length} overland legs → ${out.replace(root + '/', '')}`);
for (const g of ground) console.log(`  overland ${g.date}  ${g.from} → ${g.to}  ${g.km} km`);
