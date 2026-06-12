import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { TParsedPdf } from "../types/document-type.js";

export const pdfSplitter = async (doc: TParsedPdf) => {
  const CHUNK_SIZE = 1000;
  const CHUNK_OVERLAP = 200;

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: CHUNK_SIZE,
    chunkOverlap: CHUNK_OVERLAP,
  });

  const chunks = await splitter.splitDocuments([doc]);

  return chunks;
};
