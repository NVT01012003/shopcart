export const notFound = async (req, res, next) => {
    const error = new Error(`Not Found: ${req.originalUrl}`);
    res.status(404);
    next(error);
};

export const errorHandler = async (err, req, res) => {
    const statuscode = res.statusCode == 200 ? 500 : res.statusCode;
    req.status(statuscode);
    res.json({
        stack: err?.stack,
    });
};
