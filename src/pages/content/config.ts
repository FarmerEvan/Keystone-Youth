// src/content/config.ts
import { z, defineCollection } from 'astro:content';

const lessonsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        date: z.date(), // Format: YYYY-MM-DD
        series: z.string(),
    }),
});

// NEW: Events Collection!
const eventsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(), 
        time: z.string().default("5:00pm-6:30pm (Doors open at 4:45pm)"),
        description: z.string(),
        isHighlight: z.boolean().default(false), // Makes the box Orange instead of Gray
    }),
});

export const collections = {
    'lessons': lessonsCollection,
    'events': eventsCollection,
};