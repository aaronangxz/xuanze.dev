import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../site.config';

export async function GET(context) {
  const posts = (await getCollection('writing', (p) => !p.data.draft)).sort((a, b) => b.data.date - a.data.date);
  return rss({
    title: `${site.name} · Writing`,
    description: 'Notes on things I’ve built and bugs I’ve fixed.',
    site: context.site,
    items: posts.map((p) => ({ title: p.data.title, pubDate: p.data.date, description: p.data.description, link: `/writing/${p.id}/` })),
  });
}
