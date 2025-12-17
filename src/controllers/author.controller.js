import { createAuthor, deleteAuthor, getAllAuthor, getAuthor, updateAuthor } from "../services/author.service.js";
import { successRes, errorRes } from "../utils/response.js";

export const createAuthorController = async (req, res) => {
    try {
        const data = await createAuthor(req.body);
        successRes(res, "Created Author Complete", data);
    } catch (error) {
        errorRes(res, error.message);
    }
};

export const updateAuthorController = async (req, res) => {
    try {
        const data = await updateAuthor(req.params.id, req.body);
        successRes(res, "Created Author Complete", data);
    } catch (error) {
        errorRes(res, error.message, error.status, error.errorCode);
    }
};

export const deleteAuthorController = async (req, res) => {
    try {
        const data = await deleteAuthor(req.params.id);
        successRes(res, "Deleted Author Complete", data);
    } catch (error) {
        errorRes(res, error.message, error.status, error.errorCode);
    }
};
export const getAllAuthorController = async (req, res) => {
    try {
        const data = await getAllAuthor();
        successRes(res, "Get All Author Complete", data);
    } catch (error) {
        errorRes(res, error.message);
    }
};
export const getAuthorController = async (req, res) => {
    try {
        const data = await getAuthor(req.params.id);
        successRes(res, "Get Author Complete", data);
    } catch (error) {
        errorRes(res, error.message, error.status, error.errorCode);
    }
};
