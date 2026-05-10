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
    location: z.string().optional(),
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

const tripsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    country: z.string(),
    image: z.string(),
    tags: z.array(z.string()).default([]),
    locations: z.array(
      z.object({
        name: z.string(),
        lat: z.number(),
        lng: z.number(),
      }),
    ),
  }),
});

export const collections = {
  articles: articlesCollection,
  presentations: presentationCollection,
  projects: projectsCollection,
  engineeringProjects: engineeringProjectsCollection,
  trips: tripsCollection,
};
