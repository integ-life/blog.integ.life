import type { MarkdownInstance } from 'astro';
import type { Lang } from './site';
import { getVisualKeyForTranslation, type VisualKey } from './visuals';

export type PostFrontmatter = {
  title: string;
  description: string;
  pubDate: string | Date;
  updatedDate?: string | Date;
  tags: string[];
  heroImage: string;
  heroAlt: string;
  translationKey: string;
  featured?: boolean;
  draft?: boolean;
};

export type BlogPost = PostFrontmatter & {
  lang: Lang;
  slug: string;
  url: string;
  visualKey: VisualKey;
  pubDateValue: Date;
  updatedDateValue?: Date;
  Content: MarkdownInstance<PostFrontmatter>['Content'];
};

const modules = import.meta.glob<MarkdownInstance<PostFrontmatter>>('../content/posts/**/*.md', {
  eager: true,
});

function getPostPathParts(path: string): { lang: Lang; slug: string } | null {
  const match = path.match(/posts\/(en|zh)\/([^/]+)\.md$/);
  if (!match) return null;
  return {
    lang: match[1] as Lang,
    slug: match[2],
  };
}

function toDate(input: string | Date): Date {
  return input instanceof Date ? input : new Date(input);
}

const parsedPosts: BlogPost[] = [];

for (const [path, module] of Object.entries(modules)) {
  const parts = getPostPathParts(path);
  if (!parts) continue;
  const frontmatter = module.frontmatter;
  if (frontmatter.draft) continue;

  parsedPosts.push({
    ...frontmatter,
    lang: parts.lang,
    slug: parts.slug,
    url: parts.lang === 'en' ? `/posts/${parts.slug}/` : `/zh/posts/${parts.slug}/`,
    visualKey: getVisualKeyForTranslation(frontmatter.translationKey),
    pubDateValue: toDate(frontmatter.pubDate),
    ...(frontmatter.updatedDate ? { updatedDateValue: toDate(frontmatter.updatedDate) } : {}),
    Content: module.Content,
  });
}

const allPosts: BlogPost[] = parsedPosts.sort((a, b) => b.pubDateValue.getTime() - a.pubDateValue.getTime());

export function getPosts(lang?: Lang): BlogPost[] {
  return lang ? allPosts.filter((post) => post.lang === lang) : allPosts;
}

export function getFeaturedPosts(lang: Lang): BlogPost[] {
  const featured = getPosts(lang).filter((post) => post.featured);
  return featured.length > 0 ? featured : getPosts(lang).slice(0, 1);
}

export function getPostBySlug(lang: Lang, slug: string): BlogPost | undefined {
  return getPosts(lang).find((post) => post.slug === slug);
}

export function getTranslation(post: BlogPost): BlogPost | undefined {
  const otherLang: Lang = post.lang === 'en' ? 'zh' : 'en';
  return getPosts(otherLang).find((candidate) => candidate.translationKey === post.translationKey);
}

export function tagToSlug(tag: string): string {
  const slug = tag
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\p{L}\p{N}-]+/gu, '');
  return slug || encodeURIComponent(tag);
}

export function getTagGroups(lang: Lang): Array<{ tag: string; slug: string; count: number }> {
  const counts = new Map<string, number>();
  for (const post of getPosts(lang)) {
    for (const tag of post.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }

  return Array.from(counts.entries())
    .map(([tag, count]) => ({ tag, slug: tagToSlug(tag), count }))
    .sort((a, b) => a.tag.localeCompare(b.tag));
}

export function getPostsByTag(lang: Lang, tagSlug: string): { tag: string; slug: string; posts: BlogPost[] } | undefined {
  const group = getTagGroups(lang).find((candidate) => candidate.slug === tagSlug);
  if (!group) return undefined;
  return {
    tag: group.tag,
    slug: group.slug,
    posts: getPosts(lang).filter((post) => post.tags.some((tag) => tagToSlug(tag) === tagSlug)),
  };
}
