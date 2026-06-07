import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.union([z.string(), z.date()]),
    updatedDate: z.union([z.string(), z.date()]).optional(),
    tags: z.array(z.string()),
    heroImage: z.string(),
    heroAlt: z.string(),
    translationKey: z.string(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { posts };
