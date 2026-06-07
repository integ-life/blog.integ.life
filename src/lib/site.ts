export type Lang = 'en' | 'zh';

export const DEFAULT_LANG: Lang = 'en';

export const SITE = {
  url: 'https://blog.integ.life',
  name: 'Integ Life Blog',
  author: 'Albert',
  defaultTitle: 'Integ Life Blog',
  defaultDescription: 'Bilingual field notes about productivity, personal systems, focused work, and AI-assisted execution.',
  defaultOgImage: '/images/social/01-notes-ai-system.png',
};

export const LANGUAGES: Record<Lang, { label: string; locale: string; pathPrefix: string }> = {
  en: {
    label: 'English',
    locale: 'en',
    pathPrefix: '',
  },
  zh: {
    label: '中文',
    locale: 'zh-CN',
    pathPrefix: '/zh',
  },
};

export const COPY: Record<Lang, {
  navArticles: string;
  navArchive: string;
  navTags: string;
  latest: string;
  featured: string;
  allArticles: string;
  archiveTitle: string;
  tagsTitle: string;
  readMore: string;
  byline: string;
  switchLanguage: string;
  themeToggle: string;
  homeEyebrow: string;
  homeTitle: string;
  homeIntro: string;
  homeSecondary: string;
  footer: string;
  rss: string;
}> = {
  en: {
    navArticles: 'Articles',
    navArchive: 'Archive',
    navTags: 'Tags',
    latest: 'Latest',
    featured: 'Featured',
    allArticles: 'All articles',
    archiveTitle: 'Archive',
    tagsTitle: 'Tags',
    readMore: 'Read article',
    byline: 'Written by Albert',
    switchLanguage: '中文',
    themeToggle: 'Toggle theme',
    homeEyebrow: 'Productivity field notes',
    homeTitle: 'Systems for turning attention into progress.',
    homeIntro: 'Essays on focused work, AI-assisted execution, connected notes, goals, and the daily operating system behind integ.life.',
    homeSecondary: 'Start with the product explainer series, then evolve the blog into a public notebook for practical productivity workflows.',
    footer: 'Bilingual notes on productivity and personal operating systems.',
    rss: 'RSS',
  },
  zh: {
    navArticles: '文章',
    navArchive: '归档',
    navTags: '标签',
    latest: '最新',
    featured: '精选',
    allArticles: '全部文章',
    archiveTitle: '归档',
    tagsTitle: '标签',
    readMore: '阅读文章',
    byline: 'Albert 撰写',
    switchLanguage: 'English',
    themeToggle: '切换主题',
    homeEyebrow: '效率笔记',
    homeTitle: '把注意力变成进度的系统。',
    homeIntro: '这里记录关于专注工作、AI 辅助执行、笔记连接、目标管理，以及 integ.life 背后的个人操作系统实践。',
    homeSecondary: '先放入产品说明系列，之后逐步演化成面向真实工作流的公开笔记。',
    footer: '关于效率和个人操作系统的双语笔记。',
    rss: 'RSS',
  },
};

export function localizedPath(lang: Lang, path = '/'): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (lang === DEFAULT_LANG) return normalized;
  return `${LANGUAGES[lang].pathPrefix}${normalized === '/' ? '/' : normalized}`;
}

export function absoluteUrl(path: string): string {
  return new URL(path, SITE.url).toString();
}

export function formatDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(LANGUAGES[lang].locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
}
