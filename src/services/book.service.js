import { prisma } from "../config/prisma/client.js";

export const createBook = async (payload) => {
    try {
        const author = await prisma.author.findFirst({ where: { id: payload.authorId } });
        if (!author) {
            const error = new Error();
            error.message = "Author not found";
            error.status = 404;
            error.errorCode = "AUTHOR_NOT_FOUND";
            throw error;
        }
        const data = prisma.book.create({
            data: payload,
        });
        return data;
    } catch (error) {
        throw error;
    }
};

export const updateBook = async (id, payload) => {
    try {
        const book = await prisma.book.findFirst({ where: { id: Number(id) } });
        if (!book) {
            const error = new Error();
            error.message = "Book not found";
            error.status = 404;
            error.errorCode = "BOOK_NOT_FOUND";
            throw error;
        }
        console.log(book);

        const data = prisma.book.update({
            where: { id: Number(id) },
            data: payload,
        });
        return data;
    } catch (error) {
        throw error;
    }
};

export const deleteBook = async (id) => {
    try {
        const book = await prisma.book.findFirst({ where: { id: Number(id) } });
        if (!book) {
            const error = new Error();
            error.message = "Book not found";
            error.status = 404;
            error.errorCode = "BOOK_NOT_FOUND";
            throw error;
        }
        const data = prisma.book.delete({
            where: { id: Number(id) },
        });
        return data;
    } catch (error) {
        throw error;
    }
};
export const getAllBook = async () => {
    try {
        const data = prisma.book.findMany();
        return data;
    } catch (error) {
        throw error;
    }
};
export const getBook = async (id) => {
    try {
        const book = await prisma.book.findFirst({ where: { id: Number(id) } });
        if (!book) {
            const error = new Error();
            error.message = "Book not found";
            error.status = 404;
            error.errorCode = "BOOK_NOT_FOUND";
            throw error;
        }
        const data = prisma.book.findFirst({
            where: { id: Number(id) },
        });
        return data;
    } catch (error) {
        throw error;
    }
};
