import { CreateBook, GetBook, IBook, UpdateBook } from "../Interfaces/book.interfaces";
import { generatId } from "../utils";
import { booksDatabase } from "../database/database";

export class bookServices {

    createBook(data: CreateBook): IBook {
        const newBook: IBook = {
            id: generatId(),
            ...data,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        booksDatabase.push(newBook);

        return newBook;
    };

    getBook(search: GetBook) {
        if (search) {
            return booksDatabase.filter((book) => book.name.toLowerCase().includes(search.toLowerCase()));
        };
        return booksDatabase;
    };

    updateBook(index: number, data: UpdateBook): IBook {

        booksDatabase[index] = {
            ...booksDatabase[index],
            ...data,
            updatedAt: new Date(),
        };

        return booksDatabase[index];
    };

    deleteBook(index: number): void {
        booksDatabase.splice(index, 1);
    };
};