import { Document } from "langchain";

export type TParsedPdf = Document<{
  source: string;
  totalPages: number;
}>;
