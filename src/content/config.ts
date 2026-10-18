import { defineCollection, z } from 'astro:content';

const sectionsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    subtitle: z.string().optional(),
    badge: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = {
  sections: sectionsCollection,
};
