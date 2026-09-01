import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Resume — per-entry files, loose schema
// Each file represents one experience/education/project/leadership/honor.
const resume = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/resume" }),
  schema: z.object({
    type: z.enum(["experience", "education", "project", "leadership", "honor", "meta", "skills"]),
    title: z.string(),
    organization: z.string().optional(),
    location: z.string().optional(),
    startDate: z.string().optional(), // YYYY-MM or YYYY-MM-DD, or freeform like "10.2025"
    endDate: z.string().optional(), // "Now" | date string
    order: z.number().optional(), // sort key, lower = earlier
    tags: z.array(z.string()).optional(),
    // Highlights = bullet points. Kept as string[] for structured rendering.
    highlights: z.array(z.string()).optional(),
    links: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(),
        })
      )
      .optional(),
  }),
});

// Projects — case-study shape
const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    organization: z.string().optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    tags: z.array(z.string()).optional(),
    highlights: z.array(z.string()).optional(),
    // Case-study fields
    problem: z.string().optional(),
    stack: z.array(z.string()).optional(),
    role: z.string().optional(),
    outcome: z.string().optional(),
    links: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(),
        })
      )
      .optional(),
    draft: z.boolean().optional(),
  }),
});

// Blog — technical writing on automotive/embedded topics
const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date().optional(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { resume, projects, blog };
