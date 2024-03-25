import { NextFunction, Request, Response } from "express";
import { booksDatabase } from "../database/database";
import { AppError } from "../errors/appError";

export class BookMiddlewares {

    CheckBookId(req: Request, res: Response, next: NextFunction): Response | void {
        const index = booksDatabase.findIndex((book) => book.id === Number(req.params.id));

        if (index === -1) {
            throw new AppError(404, "Book not found.");
        };

        res.locals.bookId = index;

        return next();

    };

    IsBookIdUnique(req: Request, res: Response, next: NextFunction) {
        if (booksDatabase.some(book => book.id === req.body.id)) {
            throw new AppError(404, "Book not found.");
        };
        next();
    };

    IsBookNameUnique(req: Request, res: Response, next: NextFunction) {
        if (booksDatabase.some(book => book.name === req.body.name)) {
            throw new AppError(409,"Book already registered.");
        };
        next();
    };
};
