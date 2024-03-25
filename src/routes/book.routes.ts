import { Router } from "express";
import { bookControllers } from "../controllers/book.controllers";
import { BookMiddlewares } from "../middlewares/book.middlewares";
import { GlobalErrors } from "../errors/errors.middlewares";
import { createBookSchema, getBookSchema, updateBookSchema } from "../schemas/book.schemas";

export const bookRouter = Router();

const bookController = new bookControllers();
const bookMiddlewares = new BookMiddlewares();
const globalErros = new GlobalErrors();

bookRouter.post(
    "/",
    globalErros.validateBody({ body: createBookSchema }),
    bookMiddlewares.IsBookNameUnique,
    bookController.createBook
);
//abc
bookRouter.get(
    "/",
    globalErros.validateBody({ query: getBookSchema }),
    bookMiddlewares.IsBookIdUnique,
    bookController.getBook
);

bookRouter.use("/:id", bookMiddlewares.CheckBookId);

bookRouter.get(
    "/:id",
    bookMiddlewares.IsBookIdUnique,
    bookController.retrieveBook
);

bookRouter.patch(
    "/:id",
    globalErros.validateBody({ body: updateBookSchema }),
    bookMiddlewares.IsBookNameUnique,
    bookController.updateBook
);

bookRouter.delete(
    "/:id",
    bookMiddlewares.IsBookIdUnique,
    bookController.deleteBook
);
