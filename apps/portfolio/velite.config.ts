import { defineConfig, defineCollection, s } from "velite";

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/"),
});

const posts = defineCollection({
  name: "Post",
  pattern: "posts/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      excerpt: s.string().max(999),
      date: s.string(), // YYYY-MM-DD
      readTime: s.string(),
      tags: s.array(s.string()),
      image: s.string(),
      featured: s.boolean().default(false),
      content: s.mdx(),
    })
    .transform(computedFields),
});

const projects = defineCollection({
  name: "Project",
  pattern: "projects/**/*.yaml",
  schema: s
    .object({
      slug: s.path(),
      title: s.string(),
      description: s.string(),
      link: s.string().url(),
      github: s.string().url().optional(),
      date: s.string(),
      tags: s.array(s.string()),
      gradient: s.string(),
      icon: s.string(),
      featured: s.boolean().default(false),
      role: s.string(),
      overview: s.string(),
      features: s.array(s.string()),
      achievements: s.array(s.string()),
      result: s.string(),
      technologies: s.array(s.string()),
      image: s.string(),
    })
    .transform(computedFields),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { posts, projects },
  mdx: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
}) as any;
