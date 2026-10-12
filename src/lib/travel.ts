/**
 * Everything the Life page knows about travel, computed at build time from
 * src/data/travel/travel.json (scripts/travel-import.mjs) and runs.json (Strava).
 */
import { geoNaturalEarth1, geoPath, geoClipRectangle, geoBounds } from 'd3-geo';
import { feature, mesh } from 'topojson-client';
import land110 from 'world-atlas/land-110m.json';
import land50 from 'world-atlas/land-50m.json';
import countries110 from 'world-atlas/countries-110m.json';
import travel from '../data/travel/travel.json';
import runsFile from '../data/travel/runs.json';
import config from '../data/travel/config.json';

export type Flight = (typeof travel.flights)[number];
export type Stay = (typeof travel.stays)[number];

const today = new Date().toISOString().slice(0, 10);
const isUpcoming = (date: string) => date > today;

/* ---------- geometry ---------- */

export const W = 1600;
const projection = geoNaturalEarth1().rotate([-115, 0]).fitWidth(W, { type: 'Sphere' });
const path = geoPath(projection).digits(1);
const P = (lon: number, lat: number) => projection([lon, lat]) as [number, number];

export type Box = { x: number; y: number; w: number; h: number };
/** Projected bounding box of a lon/lat rectangle (edges sampled, since meridians curve). */
function box(lon0: number, lon1: number, lat0: number, lat1: number): Box {
  const pts: [number, number][] = [];
  for (let i = 0; i <= 24; i++) {
    const lon = lon0 + ((lon1 - lon0) * i) / 24, lat = lat0 + ((lat1 - lat0) * i) / 24;
    pts.push(P(lon, lat0), P(lon, lat1), P(lon0, lat), P(lon1, lat));
  }
  const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
  const x = Math.min(...xs), y = Math.min(...ys);
  return { x: +x.toFixed(1), y: +y.toFixed(1), w: +(Math.max(...xs) - x).toFixed(1), h: +(Math.max(...ys) - y).toFixed(1) };
}

export const regions = [
  { id: 'world', label: 'World', box: { ...box(-64.9, 294.9, -48, 72) } },
  { id: 'asia', label: 'Asia', box: box(92, 146, -14, 46) },
  { id: 'sea', label: 'Southeast Asia', box: box(97, 120, -10, 24) },
  { id: 'europe', label: 'Europe', box: box(-8, 36, 36, 57) },
  { id: 'us', label: 'United States', box: box(-127, -70, 31, 45) },
] as const;
// The world box spans the whole projected width.
(regions[0].box as Box).x = 0;
(regions[0].box as Box).w = W;

const landTopo = land110 as any;
export const landPath = path(feature(landTopo, landTopo.objects.land) as any) ?? '';

/** Sharper coastline for the zoomed regions, clipped so each one stays small. Served as /life/land.json and fetched on first zoom. */
export const regionLand: Record<string, string> = {};
{
  const land = feature(land50 as any, (land50 as any).objects.land) as any;
  for (const r of regions.slice(1)) {
    const b = r.box, pad = Math.max(b.w, b.h) * 0.3;
    const clipped = geoPath(
      geoNaturalEarth1().rotate([-115, 0]).fitWidth(W, { type: 'Sphere' })
        .postclip(geoClipRectangle(b.x - pad, b.y - pad, b.x + b.w + pad, b.y + b.h + pad)),
    ).digits(1);
    regionLand[r.id] = clipped(land) ?? '';
  }
}

/* ---------- visited countries ---------- */

const ISO_NUM: Record<string, string> = {
  AU: '036', CH: '756', CN: '156', FR: '250', GB: '826', HK: '344', ID: '360', JP: '392', KH: '116',
  KR: '410', MY: '458', SG: '702', TH: '764', TR: '792', US: '840', VN: '704',
};
const flown = travel.flights.filter((f) => !isUpcoming(f.date));
const airports = travel.airports as Record<string, { city: string; country: string; lat: number; lon: number }>;
export const visitedCountries = [...new Set([
  ...flown.flatMap((f) => [airports[f.from].country, airports[f.to].country]),
  ...travel.stays.filter((s) => !isUpcoming(s.checkIn)).map((s) => s.country),
])].sort();
const visitedNums = new Set(visitedCountries.map((c) => ISO_NUM[c]).filter(Boolean));
const ctopo = countries110 as any;
export const visitedPath = path({
  type: 'FeatureCollection',
  features: (feature(ctopo, ctopo.objects.countries) as any).features.filter((f: any) => visitedNums.has(String(f.id).padStart(3, '0'))),
} as any) ?? '';
/** Country borders, drawn faintly so the land doesn't read as one blob. */
export const bordersPath = path(mesh(ctopo, ctopo.objects.countries, (a: any, b: any) => a !== b) as any) ?? '';

/* ---------- routes ---------- */

export type Route = { d: string; a: string; b: string; km: number; count: number; upcoming: boolean; years: string };
const byRoute = new Map<string, Flight[]>();
for (const f of travel.flights) {
  const key = [f.from, f.to].sort().join('-');
  byRoute.set(key, [...(byRoute.get(key) ?? []), f]);
}
export const routes: Route[] = [...byRoute.entries()].map(([key, fs]) => {
  const [a, b] = key.split('-');
  const done = fs.filter((f) => !isUpcoming(f.date));
  const ys = [...new Set((done.length ? done : fs).map((f) => f.date.slice(0, 4)))];
  return {
    d: path({ type: 'LineString', coordinates: [[airports[a].lon, airports[a].lat], [airports[b].lon, airports[b].lat]] }) ?? '',
    a, b, km: fs[0].km, count: done.length, upcoming: done.length === 0,
    years: ys.length > 1 ? `${ys[0]}–${ys[ys.length - 1]}` : ys[0],
  };
}).sort((x, y) => x.count - y.count);

export const ground = travel.ground.map((g) => ({
  ...g, d: path({ type: 'LineString', coordinates: [g.a, g.b] }) ?? '',
}));

/* ---------- runs ---------- */

function decode(s: string): [number, number][] {
  let i = 0, lat = 0, lng = 0;
  const out: [number, number][] = [];
  while (i < s.length) {
    for (const k of [0, 1]) {
      let r = 0, sh = 0, b: number;
      do { b = s.charCodeAt(i++) - 63; r |= (b & 31) << sh; sh += 5; } while (b >= 32 && i <= s.length);
      const v = r & 1 ? ~(r >> 1) : r >> 1;
      if (k) lng += v; else lat += v;
    }
    out.push([lat / 1e5, lng / 1e5]);
  }
  return out;
}

export type Run = { id: string; date: string; title: string; km: number; race: boolean; d: string; vb: string; city: string };
export const runs: Run[] = runsFile.runs.map((r) => {
  const pts = decode(r.poly);
  const k = Math.cos((pts[0][0] * Math.PI) / 180);
  // Drop points closer than ~1% of the run's extent: invisible at sketch size, halves the payload.
  const raw = pts.map(([la, lo]) => [lo * k, -la]);
  const ext = Math.max(Math.max(...raw.map((p) => p[0])) - Math.min(...raw.map((p) => p[0])), Math.max(...raw.map((p) => p[1])) - Math.min(...raw.map((p) => p[1])));
  const xy = raw.filter((p, i) => i === 0 || i === raw.length - 1 || Math.hypot(p[0] - raw[i - 1][0], p[1] - raw[i - 1][1]) > ext * 0.012);
  const xs = xy.map((p) => p[0]), ys = xy.map((p) => p[1]);
  const x0 = Math.min(...xs), y0 = Math.min(...ys), s = 100 / Math.max(Math.max(...xs) - x0, Math.max(...ys) - y0);
  const d = 'M' + xy.map(([x, y]) => `${((x - x0) * s).toFixed(1)} ${((y - y0) * s).toFixed(1)}`).join('L');
  const w = (Math.max(...xs) - x0) * s, h = (Math.max(...ys) - y0) * s;
  return { id: r.id, date: r.date, title: r.title, km: r.km, race: 'race' in r && !!r.race, city: r.city, d, vb: `${(-6).toFixed(0)} ${(-6).toFixed(0)} ${(w + 12).toFixed(1)} ${(h + 12).toFixed(1)}` };
});

/* ---------- cities ---------- */

const slug = (s: string) => s.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const countryName = (code: string) => (config.countries as Record<string, string>)[code] ?? code;

export type City = {
  slug: string; name: string; country: string; x: number; y: number;
  nights: number; flights: number; upcoming: boolean; years: string;
  stays: { name: string; slug: string; tag?: string; chain?: string; checkIn: string; checkOut: string; nights: number; upcoming: boolean }[];
  runs: Run[];
};
const cityMap = new Map<string, { pts: [number, number][]; country: string; stays: Stay[]; flights: Flight[] }>();
const cityOf = (name: string, country: string) => {
  if (!cityMap.has(name)) cityMap.set(name, { pts: [], country, stays: [], flights: [] });
  return cityMap.get(name)!;
};
for (const s of travel.stays) { const c = cityOf(s.city, s.country); c.stays.push(s); c.pts.push([s.lon, s.lat]); }
for (const f of travel.flights) for (const code of [f.from, f.to]) {
  const a = airports[code], c = cityOf(a.city, a.country);
  if (!c.flights.includes(f)) c.flights.push(f);
  if (!c.stays.length) c.pts.push([a.lon, a.lat]);
}
export const cities: City[] = [...cityMap.entries()].map(([name, c]) => {
  const pts = c.stays.length ? c.stays.map((s) => [s.lon, s.lat] as [number, number]) : c.pts;
  const lon = pts.reduce((a, p) => a + p[0], 0) / pts.length, lat = pts.reduce((a, p) => a + p[1], 0) / pts.length;
  const [x, y] = P(lon, lat);
  const dates = [...c.flights.map((f) => f.date), ...c.stays.map((s) => s.checkIn)].filter((d) => !isUpcoming(d)).sort();
  const y0 = dates[0]?.slice(0, 4), y1 = dates[dates.length - 1]?.slice(0, 4);
  return {
    slug: slug(name), name, country: countryName(c.country), x: +x.toFixed(1), y: +y.toFixed(1),
    nights: c.stays.filter((s) => !isUpcoming(s.checkIn)).reduce((a, s) => a + s.nights, 0),
    flights: c.flights.filter((f) => !isUpcoming(f.date)).length,
    upcoming: dates.length === 0,
    years: !y0 ? 'upcoming' : y0 === y1 ? y0 : `${y0}–${y1}`,
    stays: c.stays.map((s) => ({ name: s.name, slug: slug(s.name), tag: s.tag, chain: s.chain, checkIn: s.checkIn, checkOut: s.checkOut, nights: s.nights, upcoming: isUpcoming(s.checkIn) })).reverse(),
    runs: runs.filter((r) => r.city === name).reverse(),
  };
}).sort((a, b) => b.nights - a.nights || b.flights - a.flights);

/* ---------- headline numbers ---------- */

const EARTH = 40075;
export const stats = {
  flights: flown.length,
  km: flown.reduce((a, f) => a + f.km, 0),
  earths: +(flown.reduce((a, f) => a + f.km, 0) / EARTH).toFixed(1),
  airports: new Set(flown.flatMap((f) => [f.from, f.to])).size,
  countries: visitedCountries.length,
  nights: travel.stays.filter((s) => !isUpcoming(s.checkIn)).reduce((a, s) => a + s.nights, 0),
  hotels: new Set(travel.stays.filter((s) => !isUpcoming(s.checkIn)).map((s) => s.name)).size,
  runs: runs.length,
  runKm: Math.round(runs.reduce((a, r) => a + r.km, 0)),
  upcoming: travel.flights.filter((f) => isUpcoming(f.date)).length,
  longest: [...flown].sort((a, b) => b.km - a.km)[0],
  since: travel.flights[0].date.slice(0, 4),
};

/* ---------- lists for the rest of the page ---------- */

export const airportCity = (code: string) => airports[code].city;
export const recentFlights = (n: number) => flown.slice(-n).reverse();
export const upcomingFlights = travel.flights.filter((f) => isUpcoming(f.date));
export const allStays = [...travel.stays].reverse().map((s) => ({ ...s, upcoming: isUpcoming(s.checkIn) }));
export { travel };

/* ---------- hotels (one per property; repeat stays are visits) and flight pages ---------- */

export type Hotel = {
  slug: string; name: string; brand?: string; tag?: string; chain?: string; city: string; country: string;
  lat: number; lon: number; visits: (Stay & { upcoming: boolean })[]; nights: number; upcoming: boolean; years: string;
};
export const hotels: Hotel[] = (() => {
  const by = new Map<string, Hotel>();
  for (const s of travel.stays) {
    const h = by.get(s.name) ?? { slug: slug(s.name), name: s.name, brand: s.brand, tag: s.tag, chain: s.chain, city: s.city, country: s.country, lat: s.lat, lon: s.lon, visits: [], nights: 0, upcoming: true, years: '' };
    const up = isUpcoming(s.checkIn);
    h.visits.push({ ...s, upcoming: up });
    if (!up) { h.nights += s.nights; h.upcoming = false; }
    by.set(s.name, h);
  }
  return [...by.values()].map((h) => {
    const ys = [...new Set(h.visits.map((v) => v.checkIn.slice(0, 4)))].sort();
    return { ...h, visits: h.visits.sort((a, b) => b.checkIn.localeCompare(a.checkIn)), years: ys.length > 1 ? `${ys[0]}–${ys[ys.length - 1]}` : ys[0] };
  });
})();
export const hotelBySlug = Object.fromEntries(hotels.map((h) => [h.slug, h]));
export const hotelSlug = (name: string) => slug(name);
export const countryLabel = countryName;

/** Chains in order of nights, each with its brands (most nights first). Independent hotels last. */
export const collection = (() => {
  const chains = new Map<string, Map<string, Hotel[]>>();
  for (const h of hotels) {
    const c = h.chain ?? 'Independent', b = h.brand ?? 'Independent';
    if (!chains.has(c)) chains.set(c, new Map());
    const brands = chains.get(c)!;
    brands.set(b, [...(brands.get(b) ?? []), h]);
  }
  const nights = (hs: Hotel[]) => hs.reduce((a, h) => a + h.nights, 0);
  return [...chains.entries()].map(([chain, brands]) => ({
    chain,
    hotels: [...brands.values()].flat().length,
    nights: nights([...brands.values()].flat()),
    brands: [...brands.entries()].map(([brand, hs]) => ({ brand, hotels: hs.sort((a, b) => b.nights - a.nights) })).sort((a, b) => nights(b.hotels) - nights(a.hotels)),
  })).sort((a, b) => (a.chain === 'Independent' ? 1 : b.chain === 'Independent' ? -1 : b.nights - a.nights));
})();

export const flightId = (f: Flight) => `${f.date}-${f.flight.replace(/\s+/g, '').toLowerCase()}`;
export const allFlights = travel.flights.map((f) => ({ ...f, id: flightId(f), upcoming: isUpcoming(f.date), fromCity: airports[f.from].city, toCity: airports[f.to].city }));
export const airportInfo = (code: string) => ({ code, ...airports[code], countryName: countryName(airports[code].country) });

/** Runs done in a city during a date range (inclusive), for hotel pages. */
export const runsDuring = (city: string, from: string, to: string) => runs.filter((r) => r.city === city && r.date >= from && r.date <= to);

/* ---------- small static maps for the detail pages ---------- */

const landFine = feature(land50 as any, (land50 as any).objects.land) as any;
const landCoarse = feature(landTopo, landTopo.objects.land) as any;
/** A small map framed on some geometry: land clipped to the frame so each page carries only what it shows. */
export function miniMap(geom: any, w: number, h: number, pad = 24, fine = true) {
  // Centre the projection on what's shown, so no route is cut by the map's seam.
  const [[x0], [x1]] = geoBounds(geom);
  const mid = x0 <= x1 ? (x0 + x1) / 2 : (x0 + x1 + 360) / 2;
  const pr = geoNaturalEarth1().rotate([-mid, 0]).fitExtent([[pad, pad], [w - pad, h - pad]], geom);
  const clip = pr.postclip(geoClipRectangle(-2, -2, w + 2, h + 2));
  const p = geoPath(clip).digits(1);
  return { land: p(fine ? landFine : landCoarse) ?? '', path: (g: any) => p(g) ?? '', point: (lon: number, lat: number) => pr([lon, lat]) as [number, number] };
}
/** A box of `km` around a point, to frame a mini map on. */
export const around = (lon: number, lat: number, km: number) => {
  const dLat = km / 111, dLon = km / (111 * Math.cos((lat * Math.PI) / 180));
  // Corner points, not a polygon: d3 reads polygon winding, and the wrong winding means "everything but the box".
  return { type: 'MultiPoint', coordinates: [[lon - dLon, lat - dLat], [lon + dLon, lat - dLat], [lon + dLon, lat + dLat], [lon - dLon, lat + dLat]] };
};
