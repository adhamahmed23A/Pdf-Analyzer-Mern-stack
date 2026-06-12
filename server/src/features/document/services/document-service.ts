import { Types } from "mongoose";
import { storageServices } from "./storage-service.js";
import documentModel from "../models/document-model.js";
import { pdfExtractor } from "../utils/pdf-extractor.js";
import { pdfSplitter } from "../utils/pdf-splitter.js";
import { getHttpStatus } from "../../../constants/http.js";
import { AppError } from "../../../errors/app-error.js";
import { getVectorStore } from "../../../configs/vector-store.js";
const vectorStore = getVectorStore();
const processDocument = async (userId: string, file: Express.Multer.File) => {
  let storagePath: string | null = null;
  let documentId: string | null = null;
  try {
    storagePath = await storageServices.upload(file);
    const newDocument = new documentModel({
      userId,
      title: file.originalname,
      size: file.size,
      storageKey: storagePath,
    });
    documentId = newDocument._id.toString();
    await newDocument.save();
    const parsedPdf = await pdfExtractor({ file, documentId });

    const chunks = await pdfSplitter(parsedPdf);

    await vectorStore.addDocuments(chunks);
    newDocument.status = "ready";
    await newDocument.save();
    const filePreviewUrl = storageServices.getSignedUrl(storagePath);
    return filePreviewUrl;
  } catch (error) {
    throw new AppError(
      "Failed to process document",
      getHttpStatus("BAD_REQUEST"),
      "Error in processing document. Please try again",
      false,
    );
  }
};

export const documentService = { processDocument };
