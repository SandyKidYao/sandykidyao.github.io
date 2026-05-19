import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	// generateId also strips a trailing /index so a post can live in its own
	// folder alongside its images (foo/index.md → id "foo").
	loader: glob({
		base: './src/content/blog',
		pattern: '**/*.{md,mdx}',
		generateId: ({ entry }) =>
			entry.replace(/\.(md|mdx)$/, '').replace(/\/index$/, ''),
	}),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string().optional(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			tags: z.array(z.string()).default([]),
		}),
});

export const collections = { blog };
