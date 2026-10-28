// Content invariants for src/content/posts/{en,zh}. Errors exit 1; cadence is a warning only.
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const langs = ['en', 'zh'];
const errors = [];
const byLang = { en: new Map(), zh: new Map() };

function readFrontmatter(file) {
  const match = readFileSync(file, 'utf8').match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const data = {};
  if (!match) return data;
  for (const line of match[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!kv) continue;
    data[kv[1]] = kv[2].trim().replace(/^(['"])(.*)\1$/, '$2');
  }
  return data;
}

const published = [];
for (const lang of langs) {
  const dir = join(root, 'src/content/posts', lang);
  for (const name of readdirSync(dir).filter((n) => n.endsWith('.md'))) {
    const label = `${lang}/${name}`;
    const data = readFrontmatter(join(dir, name));
    if (data.draft === 'true') continue;

    const key = data.translationKey;
    if (!key) errors.push(`${label}: missing translationKey`);
    else if (byLang[lang].has(key)) errors.push(`${label}: duplicate translationKey "${key}" (also ${byLang[lang].get(key)})`);
    else byLang[lang].set(key, label);

    if (Number.isNaN(Date.parse(data.pubDate))) errors.push(`${label}: pubDate "${data.pubDate}" is not parseable`);
    else if (lang === 'en') published.push({ label, time: Date.parse(data.pubDate), date: data.pubDate });

    if (data.coverImage) {
      if (!existsSync(join(root, 'public', data.coverImage))) errors.push(`${label}: coverImage file public${data.coverImage} not found`);
      if (!data.coverAlt) errors.push(`${label}: coverImage set but coverAlt missing`);
    }
  }
}

for (const [from, to] of [['en', 'zh'], ['zh', 'en']]) {
  for (const [key, label] of byLang[from]) {
    if (!byLang[to].has(key)) errors.push(`${label}: translationKey "${key}" has no ${to} counterpart`);
  }
}

if (errors.length) {
  for (const e of errors) console.error(`✗ ${e}`);
  process.exit(1);
}

const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
const recent = published.filter((p) => p.time >= weekAgo).length;
if (recent < 2) {
  const latest = published.reduce((a, b) => (b.time > a.time ? b : a), published[0]);
  console.warn(`⚠ Publishing cadence: ${recent} posts in last 7 days (target 2/week per README); latest post ${latest?.date ?? 'n/a'}`);
}
console.log(`✓ content: ${byLang.en.size} pairs checked`);
