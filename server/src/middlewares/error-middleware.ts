import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { sendErrorResponse } from "../utils/api-response.js";
import { AppError } from "../errors/app-error.js";

export const errorMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  // logging the error
  console.error(err);
  if (err instanceof AppError) {
    return sendErrorResponse(res, err.statusCode, {
      code: err.code,
      message: err.message,
    });
  }
};
