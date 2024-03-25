import { AnyZodObject, z } from "zod";
import { bookDatabaseSchema, bookSchema, createBookSchema, updateBookSchema } from "../schemas/book.schemas";

export type IBook = z.infer<typeof bookSchema>;

export type CreateBook = z.infer<typeof createBookSchema>;

export type GetBook = string | undefined;

export type UpdateBook = z.infer<typeof updateBookSchema>;

export type bookDatabase = z.infer<typeof bookDatabaseSchema>;

export interface IRequestSchema {
    params?: AnyZodObject,
    body?: AnyZodObject,
    query?: AnyZodObject,
};
