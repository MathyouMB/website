import { z, defineCollection } from "astro:content";

const articlesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    date: z.date(),
    draft: z.boolean(),
    featured: z.boolean(),
    template: z.enum(["Article", "ArticleV2"]).default("Article"),
    titleFontSize: z.string().default("2.5rem"),
    previewFontSize: z.string().default("1.18rem"),
    tags: z.array(z.string()).default([]),
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

const engineeringProjectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    company: z.enum(["GitLab", "Shopify", "Jobber"]),
    description: z.string(),
    date: z.date(),
    order: z.number().default(0),
    externalHref: z.string().optional(),
  }),
});

export const collections = {
  articles: articlesCollection,
  presentations: presentationCollection,
  projects: projectsCollection,
  engineeringProjects: engineeringProjectsCollection,
};
