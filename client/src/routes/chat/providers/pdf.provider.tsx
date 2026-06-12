import { useState } from "react";
import { PdfContext } from "../contexts/pdf.context";
interface PdfProviderProps {
  children: React.ReactNode;
}
export const PdfProvider = ({ children }: PdfProviderProps) => {
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  return (
    <PdfContext.Provider value={{ fileUrl, setFileUrl }}>
      {children}
    </PdfContext.Provider>
  );
};
