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
    order: z.number().default(100),
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

/* ---------- Life ---------- */

const example = z.boolean().default(false);

const flights = defineCollection({
  loader: file('src/content/life/flights.yaml'),
  schema: z.object({
    date: z.string(), // YYYY-MM
    from: z.string().length(3),
    to: z.string().length(3),
    fromCity: z.string(),
    toCity: z.string(),
    country: z.string(),
    flight: z.string().default(''),
    remark: z.string(),
    sub: z.string().optional(),
    /** Featured flights also get a paper boarding pass. */
    featured: z.boolean().default(false),
    seat: z.string().optional(),
    why: z.string().optional(),
    note: z.string().optional(),
    /** Derived from Strava locations: double-check the airports, then remove. */
    confirm: z.boolean().default(false),
    example,
  }),
});

const stays = defineCollection({
  loader: file('src/content/life/stays.yaml'),
  schema: z.object({
    name: z.string(),
    city: z.string(),
    nights: z.number().optional(),
    date: z.string(),
    note: z.string(),
    photo: z.string().optional(),
    tint: z.enum(['p1', 'p2', 'p3', 'p4']).default('p1'),
    confirm: z.boolean().default(false),
    example,
  }),
});

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

const shelf = defineCollection({
  loader: file('src/content/life/shelf.yaml'),
  schema: z.object({ label: z.string(), value: z.string(), example }),
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

export const collections = { writing, projects, notes, leetcode, flights, stays, races, shelf, polaroids };
