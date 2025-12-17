import { createBook, deleteBook, getAllBook, getBook, updateBook } from "../services/book.service.js";
import { successRes, errorRes } from "../utils/response.js";

export const createBookController = async (req, res) => {
    try {
        const data = await createBook(req.body);
        successRes(res, "Created Book Complete", data);
    } catch (error) {
        errorRes(res, error.message, error.status, error.errorCode);
    }
};

export const updateBookController = async (req, res) => {
    try {
        const data = await updateBook(req.params.id, req.body);
        successRes(res, "Created Book Complete", data);
    } catch (error) {
        errorRes(res, error.message, error.status, error.errorCode);
    }
};

export const deleteBookController = async (req, res) => {
    try {
        const data = await deleteBook(req.params.id);
        successRes(res, "Deleted Book Complete", data);
    } catch (error) {
        errorRes(res, error.message, error.status, error.errorCode);
    }
};
export const getAllBookController = async (req, res) => {
    try {
        const data = await getAllBook();
        successRes(res, "Get All Book Complete", data);
    } catch (error) {
        errorRes(res, error.message);
    }
};
export const getBookController = async (req, res) => {
    try {
        const data = await getBook(req.params.id);
        successRes(res, "Get Book Complete", data);
    } catch (error) {
        errorRes(res, error.message, error.status, error.errorCode);
    }
};
