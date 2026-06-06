import multer from "multer";
import { MIME_TYPE, MAX_PDF_SIZE_BYTES } from "../constants/index.js";
import { AppError } from "../../../errors/app-error.js";
import { getHttpStatus } from "../../../constants/http.js";
import { DOCUMENT_CODES } from "../errors/error-codes.js";

const storage = multer.memoryStorage();

export const uploadDocumentMiddleware = multer({
  storage,
  limits: {
    fileSize: MAX_PDF_SIZE_BYTES,
    files: 1,
  },
  fileFilter(req, file, callback) {
    if (file.mimetype !== MIME_TYPE) {
      return callback(
        new AppError(
          "Only PDF files are allowed",
          getHttpStatus("BAD_REQUEST"),
          DOCUMENT_CODES.INVALID_FILE_TYPE,
          true,
        ),
      );
    }
    callback(null, true);
  },
}).single("document");
