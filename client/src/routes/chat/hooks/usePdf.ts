import { useContext } from "react";
import { PdfContext, type PDFContextType } from "../contexts/pdf.context";

export const usePdf = (): PDFContextType => {
  const context = useContext(PdfContext);
  if (!context) {
    throw new Error("usePdf must be used within a PdfProvider.");
  }
  return context;
};
