import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { SITE } from '../lib/site';
import { getPosts } from '../lib/posts';

export const GET: APIRoute = (context) => rss({
  title: SITE.name,
  description: SITE.defaultDescription,
  site: context.site ?? SITE.url,
  items: getPosts('en').map((post) => ({
    title: post.title,
    description: post.description,
    pubDate: post.pubDateValue,
    link: post.url,
    categories: post.tags,
    author: SITE.author,
  })),
  customData: '<language>en</language>',
});
