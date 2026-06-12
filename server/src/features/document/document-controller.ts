import { NextFunction, Request, Response } from "express";
import { asyncHandler } from "../../utils/async-handler.js";
import { documentService } from "./services/document-service.js";
import { AppError } from "../../errors/app-error.js";
import { getHttpStatus, HTTP_STATUS } from "../../constants/http.js";
import { sendSuccessResponse } from "../../utils/api-response.js";

const processDocument = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const file = req.file;
    const userId = req.userId;
    if (!file) {
      throw new AppError(
        "No file uploaded",
        getHttpStatus("BAD_REQUEST"),
        "FILE_REQUIRED",
        true,
      );
    }

    const { data } = await documentService.processDocument(userId, file);
    sendSuccessResponse(res, HTTP_STATUS.CREATED, data);
  },
);

export const documentController = { processDocument };
