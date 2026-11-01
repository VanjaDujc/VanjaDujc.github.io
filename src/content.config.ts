// Content structure. Every collection is stored as src/content/<collection>/<locale>/<name>.md
// and edited through Sveltia CMS (public/admin/config.yml). Keep both files in sync.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const markdown = (base: string) => glob({ pattern: '**/*.md', base });

const pages = defineCollection({
  loader: markdown('./src/content/pages'),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    sideImage: z.string().optional(),
    // products page: "where to buy" text in the left column
    sidebar: z.string().optional(),
    // home page
    introImage: z.string().optional(),
    intro: z.string().optional(),
    newsTitle: z.string().optional(),
    galleryTitle: z.string().optional(),
    galleryImage: z.string().optional(),
    galleryText: z.string().optional(),
    // gallery page
    images: z.array(z.object({ image: z.string(), caption: z.string().optional() })).optional(),
  }),
});

const products = defineCollection({
  loader: markdown('./src/content/products'),
  schema: z.object({
    title: z.string(),
    category: z.enum(['basic', 'supplementary', 'gift']),
    order: z.number().default(0),
    size: z.string().optional(),
    images: z.array(z.string()).default([]),
  }),
});

const recipes = defineCollection({
  loader: markdown('./src/content/recipes'),
  schema: z.object({
    title: z.string(),
    order: z.number().default(0),
  }),
});

const news = defineCollection({
  loader: markdown('./src/content/news'),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
  }),
});

const awards = defineCollection({
  loader: markdown('./src/content/awards'),
  schema: z.object({
    title: z.string(),
    order: z.number().default(0),
    logo: z.string().optional(),
    url: z.string().optional(),
  }),
});

export const collections = { pages, products, recipes, news, awards };
