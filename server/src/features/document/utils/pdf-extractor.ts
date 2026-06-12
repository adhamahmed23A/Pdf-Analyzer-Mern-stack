import { PDFParse, TextResult, FormatError } from "pdf-parse";
import { documentErrorFactory } from "../errors/error-factory.js";
import { Document } from "@langchain/core/documents";
import { TParsedPdf } from "../types/document-type.js";

type props = {
  file: Express.Multer.File;
  documentId: string;
};
export const pdfExtractor = async ({
  documentId,
  file,
}: props): Promise<TParsedPdf> => {
  const { buffer, originalname } = file;
  const parser = new PDFParse({
    data: buffer,
  });

  const text = await parser.getText();

  const doc = new Document({
    pageContent: text.text,
    metadata: {
      source: originalname,
      totalPages: text.total,
      documentId,
    },
  });
  return doc;
};
