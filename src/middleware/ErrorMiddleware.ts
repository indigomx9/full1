import express from "express";
import { HttpException } from "./HttpExcepton";

export const notFoundError = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    const error: any = new Error("Not Found!");
    error.status = 404;
    next(error);
};

export const errorHandler = (
    error: HttpException,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    return res.status(error.status || 500).json({
        message: error.message,
        status: error.status,
        stack: error.stack
    })
};


