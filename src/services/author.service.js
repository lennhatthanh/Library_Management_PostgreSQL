import { prisma } from "../config/prisma/client.js";

export const createAuthor = async (payload) => {
    try {
        const data = prisma.author.create({
            data: payload,
        });
        return data;
    } catch (error) {
        throw error;
    }
};

export const updateAuthor = async (id, payload) => {
    try {
        const author = await prisma.author.findFirst({ where: { id: payload.authorId } });
        if (!author) {
            const error = new Error();
            error.message = "Author not found";
            error.status = 404;
            error.errorCode = "AUTHOR_NOT_FOUND";
            throw error;
        }
        const data = prisma.author.update({
            where: { id: Number(id) },
            data: payload,
        });
        return data;
    } catch (error) {
        throw error;
    }
};

export const deleteAuthor = async (id) => {
    try {
        const author = await prisma.author.findFirst({ where: { id: payload.authorId } });
        if (!author) {
            const error = new Error();
            error.message = "Author not found";
            error.status = 404;
            error.errorCode = "AUTHOR_NOT_FOUND";
            throw error;
        }
        const data = prisma.author.delete({
            where: { id: Number(id) },
        });
        return data;
    } catch (error) {
        throw error;
    }
};
export const getAllAuthor = async () => {
    try {
        const data = prisma.author.findMany();
        return data;
    } catch (error) {
        throw error;
    }
};
export const getAuthor = async (id) => {
    try {
        const author = await prisma.author.findFirst({ where: { id: payload.authorId } });
        if (!author) {
            const error = new Error();
            error.message = "Author not found";
            error.status = 404;
            error.errorCode = "AUTHOR_NOT_FOUND";
            throw error;
        }
        const data = prisma.author.findUnique({
            where: { id: Number(id) },
            include: { books: true },
        });
        return data;
    } catch (error) {
        throw error;
    }
};
