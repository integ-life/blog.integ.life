import type { Lang } from './site';

export type VisualKey = 'notes' | 'focus' | 'devices' | 'goals' | 'backoffice';

type VisualCopy = {
  accent: string;
  accent2: string;
  eyebrow: string;
  title: string[];
  subtitle: string;
  chips: string[];
  footer: string;
  heroAlt: string;
  labels: Record<string, string>;
};

export type ExplainerVisualData = VisualCopy & {
  key: VisualKey;
};

const VISUALS: Record<VisualKey, Record<Lang, VisualCopy>> = {
  notes: {
    en: {
      accent: '#2563eb',
      accent2: '#f59e0b',
      eyebrow: 'For knowledge workers',
      title: ['Turn ideas', 'into an executable system'],
      subtitle: 'Notes, comments, AI help, and todos stay connected.',
      chips: ['Capture fragments', 'Advance in comments', 'Turn into tasks'],
      footer: 'AI-assisted personal operating system',
      heroAlt: 'Editable explainer visual for connected notes, AI comments, and todos.',
      labels: {
        noteTitle: 'Recent notes',
        noteLineOne: 'Launch plan draft',
        noteLineTwo: 'Open questions',
        tagOne: '#project idea',
        tagTwo: '#needs review',
        aiTitle: 'AI assistant comment',
        aiText: 'Split this into 3 executable todos.',
        action: 'Generate todos',
      },
    },
    zh: {
      accent: '#2563eb',
      accent2: '#f59e0b',
      eyebrow: '给知识工作者',
      title: ['把想法变成', '可执行系统'],
      subtitle: '笔记 / 评论 / AI 助手 / 待办 串在一起。',
      chips: ['先写下碎片', '在评论里推进', '沉淀成任务'],
      footer: 'AI-assisted personal operating system',
      heroAlt: '可编辑说明图：笔记、AI 评论与待办保持连接。',
      labels: {
        noteTitle: '最近笔记',
        noteLineOne: '上线计划草稿',
        noteLineTwo: '待确认问题',
        tagOne: '#项目想法',
        tagTwo: '#待确认',
        aiTitle: 'AI 助手评论',
        aiText: '建议拆成 3 个可执行 TODO。',
        action: '生成待办',
      },
    },
  },
  focus: {
    en: {
      accent: '#e11d48',
      accent2: '#fb7185',
      eyebrow: 'For distracted workdays',
      title: ['A timer should', 'remember the work'],
      subtitle: 'Each focus session links back to a real todo.',
      chips: ['25 minutes', 'Save evidence', 'Review the week'],
      footer: 'Todo + Pomodoro + Calendar',
      heroAlt: 'Editable explainer visual for a pomodoro timer connected to a todo.',
      labels: {
        timerTitle: 'Running focus',
        timerValue: '18:42',
        timerState: 'Deep work',
        todoTitle: 'Linked todo',
        todoText: 'Finish product explainer cards',
        timelineTitle: 'Today timeline',
      },
    },
    zh: {
      accent: '#e11d48',
      accent2: '#fb7185',
      eyebrow: '给容易分心的人',
      title: ['番茄钟不只是', '倒计时'],
      subtitle: '每次专注都绑定待办，留下真实进度。',
      chips: ['25 分钟专注', '自动保存记录', '日历回看投入'],
      footer: 'Todo + Pomodoro + Calendar',
      heroAlt: '可编辑说明图：番茄钟与待办进度连接。',
      labels: {
        timerTitle: '进行中的番茄',
        timerValue: '18:42',
        timerState: '专注中',
        todoTitle: '绑定待办',
        todoText: '写完产品说明图',
        timelineTitle: '今日时间轴',
      },
    },
  },
  devices: {
    en: {
      accent: '#059669',
      accent2: '#06b6d4',
      eyebrow: 'For multi-device days',
      title: ['Web, Mac, phone, watch', 'all stay connected'],
      subtitle: 'Capture offline first, then sync when the network returns.',
      chips: ['Web / PWA', 'macOS menu bar', 'Android + Wear OS'],
      footer: 'Offline-first sync across everyday devices',
      heroAlt: 'Editable explainer visual for cross-device offline-first sync.',
      labels: {
        webTitle: 'Web / PWA',
        phoneTitle: 'Android',
        phoneAction: 'Start',
        watchTitle: 'Wear OS',
        watchState: 'Sync',
      },
    },
    zh: {
      accent: '#059669',
      accent2: '#06b6d4',
      eyebrow: '给多设备切换的人',
      title: ['网页、Mac、手机、手表', '都能接上'],
      subtitle: '离线先记录，有网再同步。',
      chips: ['Web / PWA', 'macOS 菜单栏', 'Android + Wear OS'],
      footer: 'Offline-first sync across everyday devices',
      heroAlt: '可编辑说明图：Web、Android 和 Wear OS 离线优先同步。',
      labels: {
        webTitle: 'Web / PWA',
        phoneTitle: 'Android',
        phoneAction: '开始',
        watchTitle: 'Wear OS',
        watchState: '同步',
      },
    },
  },
  goals: {
    en: {
      accent: '#7c3aed',
      accent2: '#22c55e',
      eyebrow: 'For long-running projects',
      title: ['Goals need', 'evidence'],
      subtitle: 'Milestones, todos, and AI review create an execution trail.',
      chips: ['Goal tracking', 'Nested tasks', 'AI review'],
      footer: 'Goals + Todos + AI Review',
      heroAlt: 'Editable explainer visual for goals, milestones, and AI completion review.',
      labels: {
        goalTitle: 'Goal: launch feature',
        milestoneTitle: 'Milestones',
        milestoneOne: 'Design review',
        milestoneTwo: 'Build and verify',
        reviewTitle: 'AI completion review',
        score: '82',
        scoreLabel: 'Evidence looks strong',
        scoreHint: 'Add test notes before closing.',
        action: 'Accept completion',
      },
    },
    zh: {
      accent: '#7c3aed',
      accent2: '#22c55e',
      eyebrow: '给做长期项目的人',
      title: ['目标不是口号', '要拆成行动'],
      subtitle: '目标、里程碑、待办、AI 完成度评估。',
      chips: ['目标跟踪', '子任务层级', 'AI 评分与证据'],
      footer: 'Goals + Todos + AI Review',
      heroAlt: '可编辑说明图：目标、里程碑和 AI 完成度评估。',
      labels: {
        goalTitle: '目标：上线新功能',
        milestoneTitle: '里程碑',
        milestoneOne: '设计评审',
        milestoneTwo: '实现与验证',
        reviewTitle: 'AI 完成度评估',
        score: '82',
        scoreLabel: '证据充足',
        scoreHint: '建议补充测试记录。',
        action: '接受完成',
      },
    },
  },
  backoffice: {
    en: {
      accent: '#0891b2',
      accent2: '#f97316',
      eyebrow: 'For independent work',
      title: ['Time, money, people', 'in one back office'],
      subtitle: 'Accounting, time tracking, ideas, and follow-ups meet in one record.',
      chips: ['Quick accounting', 'Time reports', 'Follow-ups'],
      footer: 'Accounting + Time + People Memory',
      heroAlt: 'Editable explainer visual for accounting, time tracking, and people follow-ups.',
      labels: {
        moneyTitle: 'Recent money',
        moneyValue: '- $128',
        timeTitle: 'Time tracking',
        timeValue: '4h 20m',
        peopleTitle: 'Follow-ups',
        peopleValue: '3 open',
        intakeTitle: 'Homepage intake',
        intakeText: 'Ideas, todos, notes, and entries can land first and be organized later.',
      },
    },
    zh: {
      accent: '#0891b2',
      accent2: '#f97316',
      eyebrow: '给自由职业者和生活管理控',
      title: ['时间、钱、人际关系', '放进同一个后台'],
      subtitle: '记账、时间追踪、想法、人际记忆逐步汇合。',
      chips: ['快速记一笔', '时间分类报表', '跟进事项不丢'],
      footer: 'Accounting + Time + People Memory',
      heroAlt: '可编辑说明图：记账、时间追踪和人际跟进。',
      labels: {
        moneyTitle: '最近记账',
        moneyValue: '- ¥128',
        timeTitle: '时间追踪',
        timeValue: '4h 20m',
        peopleTitle: '人际跟进',
        peopleValue: '3 件',
        intakeTitle: '主页快速入口',
        intakeText: '想法、待办、笔记、流水都能先收进来，再慢慢整理。',
      },
    },
  },
};

const TRANSLATION_VISUALS: Record<string, VisualKey> = {
  'notes-ai-system': 'notes',
  'focus-pomodoro-progress': 'focus',
  'multi-device-offline-workflow': 'devices',
  'goals-need-evidence': 'goals',
  'personal-back-office': 'backoffice',
};

export function getVisualKeyForTranslation(translationKey: string): VisualKey {
  return TRANSLATION_VISUALS[translationKey] ?? 'notes';
}

export function getVisual(key: VisualKey, lang: Lang): ExplainerVisualData {
  return {
    key,
    ...VISUALS[key][lang],
  };
}
