import { z } from "zod";

export const bookSchema = z.object({
    id: z.number().positive(),
    name: z.string().min(3),
    pages: z.number().min(1),
    category: z.string().optional(),
    createdAt: z.date(),
    updatedAt: z.date(),
});

export const createBookSchema = bookSchema.pick({
    name: true,
    pages: true,
    category: true,
});

export const getBookSchema = z.object({
    search: z.string().min(1).optional(),
});

export const updateBookSchema = createBookSchema.partial();

export const bookDatabaseSchema = bookSchema.array();
