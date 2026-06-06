import { NextFunction, Request, Response } from "express";
import { asyncHandler } from "../../utils/async-handler.js";

const uploadDocument = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {},
);
