import { createContext } from "react";
export interface PDFContextType {
  fileUrl: string | null;
  setFileUrl: React.Dispatch<React.SetStateAction<string | null>>;
}
export const PdfContext = createContext<PDFContextType | null>(null);
