import { NextFunction, Request, RequestHandler, Response } from "express";
type TFn = (req: Request, res: Response, next: NextFunction) => Promise<void>;
export const asyncHandler =
  (fn: TFn): RequestHandler =>
  async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
