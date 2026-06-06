import { PdfDrop } from "./pdf.drop";

type Props = {
  url: string;
};

export const PDFViewer = ({ url }: Props) => {
  return (
    <>
      <PdfDrop />

      {/* <iframe
        className="w-full h-full"
        src={`https://docs.google.com/gview?url=${url}&embedded=true`}
      ></iframe> */}
    </>
  );
};
