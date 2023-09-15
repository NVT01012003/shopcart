export const notFound = (req, res, next) => {
    const error = new Error(`Not Found: ${req.originalUrl}`);
    res.status(404);
    next(error);
};

export const errorHandler = (error, request, response, next) => {
    const statuscode = response.statusCode == 200 ? 500 : response.statusCode;
    response.status(statuscode).json(error.message);
};

export const hanleDbError = async (callback, ...args) => {
    try {
        const data = await callback(args);
        return data;
    } catch (e) {
        throw new Error("Server error");
    }
};
