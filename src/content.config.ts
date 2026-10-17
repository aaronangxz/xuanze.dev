import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

/* ---------- Work ---------- */

const writing = defineCollection({
  loader: glob({ pattern: '*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    description: z.string().optional(),
    /** Slug of a project in src/content/projects this post belongs to. */
    project: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    kind: z.enum(['product', 'work', 'side']),
    summary: z.string(),
    status: z.string(),
    period: z.string(),
    role: z.string().optional(),
    company: z.string().optional(),
    stack: z.array(z.string()).default([]),
    /** External link. Projects with an href have no case-study page and open this instead. */
    href: z.string().url().optional(),
    live: z.string().url().optional(),
    /** Square app icon in public/, e.g. /logos/avenly.png. Shown in search, on the page and in Currently. */
    logo: z.string().optional(),
    order: z.number().default(100),
    /** Inactive projects are listed under "Inactive", quieter, on the Projects page and in search. */
    active: z.boolean().default(true),
    /** false: no case-study page (and no href), so the project is listed but not a link. */
    page: z.boolean().default(true),
    draft: z.boolean().default(false),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({ tags: z.array(z.string()).optional() }).passthrough(),
});

const leetcode = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/leetcode' }),
  schema: z.object({ tags: z.array(z.string()).optional() }).passthrough(),
});

/* ---------- Life ----------
   Flights, stays and travel runs are not collections: see src/data/travel/ and scripts/travel-import.mjs. */

const example = z.boolean().default(false);

const races = defineCollection({
  loader: file('src/content/life/races.yaml'),
  schema: z.object({
    name: z.string(),
    label: z.string(), // printed on the bib band, e.g. "Tokyo · 42K"
    distance: z.enum(['5K', '10K', '21K', '42K', 'other']),
    date: z.string(), // YYYY-MM-DD
    time: z.string(),
    bib: z.string().optional(),
    band: z.string().default('#2C3E57'),
    pb: z.boolean().default(false),
    strava: z.string().optional(),
    example,
  }),
});

/**
 * Notes, a rating and photos for a hotel or a flight. One folder per entry:
 *   src/content/journal/hotels/<hotel-slug>/index.md   (slug is shown at the bottom of the hotel's page)
 *   src/content/journal/flights/<yyyy-mm-dd-flight>/index.md
 * Photos go in the same folder and are listed in `photos`.
 */
const journal = defineCollection({
  loader: glob({ pattern: '{hotels,flights}/*/index.{md,mdx}', base: './src/content/journal' }),
  schema: ({ image }) => z.object({
    rating: z.number().min(0).max(5).optional(),
    title: z.string().optional(),
    photos: z.array(z.object({ src: image(), alt: z.string().default(''), caption: z.string().optional() })).default([]),
    /** A Xiaohongshu (RED) post about this stay or flight, shown as a link card: the post's link, or { url, title, cover }. */
    xhs: z.union([
      z.string().url().transform((url) => ({ url, title: undefined, cover: undefined })),
      z.object({ url: z.string().url(), title: z.string().optional(), cover: image().optional() }),
    ]).optional(),
  }),
});

const gear = defineCollection({
  loader: file('src/content/life/gear.yaml'),
  schema: z.object({ kind: z.string(), name: z.string(), km: z.number().optional(), retired: z.boolean().default(false) }),
});

const polaroids = defineCollection({
  loader: file('src/content/life/polaroids.yaml'),
  schema: z.object({
    caption: z.string(),
    photo: z.string().optional(),
    tint: z.enum(['p1', 'p2', 'p3', 'p4']).default('p1'),
    example,
  }),
});

export const collections = { writing, projects, notes, leetcode, races, gear, polaroids, journal };
