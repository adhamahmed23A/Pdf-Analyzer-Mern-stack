import { getHttpStatus } from "../../../constants/http.js";
import { AppError } from "../../../errors/app-error.js";
import { StorageError } from "@supabase/storage-js";
import { DOCUMENT_CODES } from "./error-codes.js";
import { FormatError } from "pdf-parse";

const documentStorageError = (error: StorageError, isOperational: boolean) =>
  new AppError(
    error.message,
    error.status || getHttpStatus("INTERNAL_SERVER_ERROR"),
    error.statusCode || DOCUMENT_CODES.UPLOAD_FAILED,
    isOperational,
  );
const documentParserError = (error: FormatError) =>
  new AppError(
    error.message,
    getHttpStatus("INTERNAL_SERVER_ERROR"),
    DOCUMENT_CODES.PDF_CORRUPTED,
    false,
  );

export const documentErrorFactory = {
  documentStorageError,
  documentParserError,
};
