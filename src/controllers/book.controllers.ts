import { Request, Response } from "express";
import { booksDatabase } from "../database/database";
import { bookServices } from "../services/book.services";

export class bookControllers {

    createBook(req: Request, res: Response): Response {
        const bookService = new bookServices();
        const newBook = bookService.createBook(req.body);

        return res.status(201).json(newBook);
    };

    getBook(req: Request, res: Response): Response {
        const bookService = new bookServices();
        const name = req.query.search as string;
        const allBook = bookService.getBook(name);

        return res.status(200).json(allBook);
    };

    retrieveBook(req: Request, res: Response): Response {
        const index = res.locals.bookId;

        return res.status(200).json(booksDatabase[index]);
    };

    updateBook(req: Request, res: Response): Response {
        const bookService = new bookServices();

        const index = res.locals.bookId;

        const updateBook = bookService.updateBook(index, req.body);

        return res.status(200).json(updateBook);
    };

    deleteBook(req: Request, res: Response): Response {
        const index = res.locals.bookId;

        const bookService = new bookServices();

        bookService.deleteBook(index);

        return res.status(204).send();
    };
};