import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { SITE } from '../../lib/site';
import { getPosts } from '../../lib/posts';

export const GET: APIRoute = (context) => rss({
  title: `${SITE.name} 中文`,
  description: '关于效率、个人系统、专注工作和 AI 辅助执行的中文笔记。',
  site: new URL('/zh/', context.site ?? SITE.url),
  items: getPosts('zh').map((post) => ({
    title: post.title,
    description: post.description,
    pubDate: post.pubDateValue,
    link: post.url,
    categories: post.tags,
    author: SITE.author,
  })),
  customData: '<language>zh-CN</language>',
});
