import { Response } from "express";
import { getHttpStatus, THttpStatus } from "../constants/http.js";
import {
  IErrorResponse,
  ISuccessResponse,
} from "../types/api-response-types.js";

export function sendSuccessResponse<T>(
  res: Response,
  statusCode: number,
  data: T,
) {
  const body: ISuccessResponse = {
    success: true,
    data,
  };
  return res.status(statusCode).json(body);
}

export function sendErrorResponse(
  res: Response,
  statusCode: number,
  error: IErrorResponse["error"],
) {
  const body: IErrorResponse = {
    success: false,
    error,
  };
  return res.status(statusCode).json(body);
}
