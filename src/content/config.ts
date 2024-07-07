import { z, defineCollection } from "astro:content";

const articlesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publication_date: z.date(),
    last_edited: z.date(),
  }),
});

const presentationCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    link: z.string(),
    featured: z.boolean(),
  }),
});

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    link: z.string(),
  }),
});

export const collections = {
  articles: articlesCollection,
  presentations: presentationCollection,
  projects: projectsCollection,
};
