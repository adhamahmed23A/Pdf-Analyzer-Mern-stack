import { usePdf } from "../hooks/usePdf";
import { PdfDrop } from "./pdf.drop";

export const PDFViewer = () => {
  const { fileUrl } = usePdf();
  console.log(fileUrl);
  return (
    <>
      {fileUrl ? (
        <iframe
          className="w-full h-full"
          src={`https://docs.google.com/gview?url=${fileUrl}&embedded=true`}
        />
      ) : (
        <PdfDrop />
      )}
    </>
  );
};
