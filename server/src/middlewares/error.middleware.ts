import { NextFunction, Request, Response } from "express";

export const errorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // logging the error
  console.error(err);
};
