export type Lang = 'en' | 'zh';

export const DEFAULT_LANG: Lang = 'en';

export const SITE = {
  url: 'https://blog.integ.life',
  name: 'Integ.Life Field Notes',
  author: 'Albert',
  defaultTitle: 'Integ.Life Field Notes',
  defaultDescription: 'Bilingual product stories, practical notes, and experiments from across the Integ.Life family of focused apps.',
  defaultOgImage: '/images/social/01-notes-ai-system.png',
};

export const PRODUCTS = [
  {
    domain: 'app.integ.life',
    name: 'Integ.Life App',
    url: 'https://app.integ.life',
    description: {
      en: 'A private operating system for notes, tasks, goals, focus, people, and money.',
      zh: '连接笔记、待办、目标、专注、人际与财务的私人操作系统。',
    },
  },
  {
    domain: 'lang.integ.life',
    name: 'Lingulet',
    url: 'https://lang.integ.life',
    description: {
      en: 'Read with context and turn unfamiliar words into a bounded daily learning loop.',
      zh: '在语境中阅读，并把生词变成有边界的每日学习闭环。',
    },
  },
  {
    domain: 'chat.integ.life',
    name: 'Integ-Chat',
    url: 'https://chat.integ.life',
    description: {
      en: 'Focused rooms, channels, threads, and agent collaboration with shared identity.',
      zh: '用房间、频道、话题串和 Agent 协作承载聚焦沟通。',
    },
  },
  {
    domain: 'chinese-chess.integ.life',
    name: 'Chinese Chess',
    url: 'https://chinese-chess.integ.life',
    description: {
      en: 'Learn Xiangqi through rules, guided practice, engines, and durable game records.',
      zh: '通过规则、引导练习、引擎与棋谱记录学习中国象棋。',
    },
  },
  {
    domain: 'snake.integ.life',
    name: 'Snake Arena',
    url: 'https://snake.integ.life',
    description: {
      en: 'A compact competitive Snake game with persistent identity, replays, and stats.',
      zh: '带统一身份、回放与统计的轻量竞技贪吃蛇。',
    },
  },
  {
    domain: 'chess.integ.life', name: 'Chess', url: 'https://chess.integ.life',
    description: { en: 'Learn and play chess with courses, Stockfish, analysis and synced games.', zh: '通过课程、Stockfish、分析与同步棋谱学习并对弈国际象棋。' },
  },
  {
    domain: 'games.integ.life', name: 'Integ Games', url: 'https://games.integ.life',
    description: { en: 'Twenty-two original browser games with touch controls and local saves.', zh: '二十二个原创浏览器游戏，支持触控与本机存档。' },
  },
  {
    domain: 'tools.integ.life', name: 'Integ Tools', url: 'https://tools.integ.life',
    description: { en: '65 browser utilities and calculators in seven interface languages.', zh: '65 个浏览器工具与计算器，支持七种界面语言。' },
  },
  {
    domain: 'integ.life/investment', name: 'Investment', url: 'https://integ.life/investment/',
    description: { en: 'Options strategy research, model backtests and transparent cash-flow ledgers.', zh: '期权策略研究、模型回测与透明的现金流账本。' },
  },
  {
    domain: 'blog.integ.life',
    name: 'Field Notes',
    url: 'https://blog.integ.life',
    description: {
      en: 'Product stories, working notes, and the ideas behind the whole app family.',
      zh: '记录整个产品家族的产品故事、实践笔记与设计思考。',
    },
  },
  {
    domain: "things.integ.life",
    name: "Things",
    url: "https://things.integ.life/",
    description: {
      en: "Catalog belongings and find where they are stored.",
      zh: "记录物品，查找它们的存放位置。"
    }
  },
  {
    domain: "family.integ.life",
    name: "Family Daily",
    url: "https://family.integ.life/",
    description: {
      en: "Share everyday moments and preserve family memories.",
      zh: "分享日常点滴，留存家庭记忆。"
    }
  },
  {
    domain: "context.integ.life",
    name: "Context",
    url: "https://context.integ.life/",
    description: {
      en: "Keep project records and bring verified context to AI.",
      zh: "留存项目记录，为 AI 提供可追溯的上下文。"
    }
  },
] as const;

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
  navProducts: string;
  navMainSite: string;
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
  productsEyebrow: string;
  productsTitle: string;
  productsIntro: string;
  productOpen: string;
  productCurrent: string;
  footer: string;
  rss: string;
}> = {
  en: {
    navArticles: 'Articles',
    navArchive: 'Archive',
    navTags: 'Tags',
    navProducts: 'Products',
    navMainSite: 'Main site',
    latest: 'Latest',
    featured: 'Featured',
    allArticles: 'All articles',
    archiveTitle: 'Archive',
    tagsTitle: 'Tags',
    readMore: 'Read article',
    byline: 'Written by Albert',
    switchLanguage: '中文',
    themeToggle: 'Toggle theme',
    homeEyebrow: 'Notes from the Integ.Life family',
    homeTitle: 'Stories from many focused apps.',
    homeIntro: 'Product stories, practical notes, and experiments from across Integ.Life—not only the personal operating system at app.integ.life.',
    homeSecondary: 'Albert’s field notes on building and using the focused tools across Integ.Life.',
    productsEyebrow: 'One family, many tools',
    productsTitle: 'Explore the apps',
    productsIntro: 'Each product does one job clearly. Open any door, then come back here for the ideas and updates behind it.',
    productOpen: 'Open app',
    productCurrent: 'You are here',
    footer: 'Bilingual product stories and field notes from across Integ.Life.',
    rss: 'RSS',
  },
  zh: {
    navArticles: '文章',
    navArchive: '归档',
    navTags: '标签',
    navProducts: '产品',
    navMainSite: '主站',
    latest: '最新',
    featured: '精选',
    allArticles: '全部文章',
    archiveTitle: '归档',
    tagsTitle: '标签',
    readMore: '阅读文章',
    byline: 'Albert 撰写',
    switchLanguage: 'English',
    themeToggle: '切换主题',
    homeEyebrow: '来自 Integ.Life 产品家族的笔记',
    homeTitle: '多个聚焦 App 的产品故事。',
    homeIntro: '这里记录整个 Integ.Life 产品家族的故事、实践与实验，不再只聚焦 app.integ.life 的个人操作系统。',
    homeSecondary: 'Albert 关于构建和使用 Integ.Life 各个聚焦工具的实践笔记。',
    productsEyebrow: '一个家族，多个工具',
    productsTitle: '探索所有 App',
    productsIntro: '每个产品专注做好一件事。选择一个入口，也可以回到这里了解它背后的思考与更新。',
    productOpen: '打开 App',
    productCurrent: '你在这里',
    footer: '来自整个 Integ.Life 产品家族的双语产品故事与实践笔记。',
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
