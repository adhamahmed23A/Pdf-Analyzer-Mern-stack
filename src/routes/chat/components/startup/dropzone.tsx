import { DownloadCloud, UploadCloud } from "lucide-react";
import { useCallback, useState } from "react";
import { useDropzone, type DropzoneOptions } from "react-dropzone";
import { AcceptedFiles } from "./accepted.files";
import { toast } from "sonner";
export const Dropzone = () => {
  const [file, setFile] = useState<File | null>(null);
  const onDrop = useCallback(<T extends File>(acceptedFiles: T[]) => {
    console.log(acceptedFiles);
    setFile(acceptedFiles[0]);
  }, []);

  const Options: DropzoneOptions = {
    accept: {
      "application/pdf": [".pdf"],
      "image/*": [".jpg", ".jpeg", ".png"],
    },
    maxSize: 10 * 1024 * 1024, // 10MB
    maxFiles: 1,
    multiple: false,
    onDrop,
    onDropRejected: (fileRejections) => {
      if (fileRejections[0].errors[0].code === "file-too-large") {
        toast.error("File is too large. Maximum size is 10MB.");
      } else if (fileRejections[0].errors[0].code === "file-invalid-type") {
        toast.error("Invalid file type. Only PDF files are accepted.");
      } else if (fileRejections[0].errors[0].code === "too-many-files") {
        toast.error("Too many files. Only one file is allowed.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    },
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone(Options);

  return (
    <>
      <div className="max-w-2xl w mx-auto ">
        <div
          {...getRootProps({
            className: `bg-brand-color/10 h-64  ${
              isDragActive && !file
                ? "border-brand-color bg-brand-color/10 "
                : "border-border bg-brand-color/5 "
            } cursor-pointer
                ${!file && "hover:bg-brand-color/15"}
             rounded-2xl border-2 border-dashed border-border transition-colors duration-200 flex items-center justify-center `,
          })}
        >
          <input
            {...getInputProps({
              disabled: !!file,
            })}
          />
          {isDragActive ? (
            <div className=" flex flex-col items-center gap-4 text-center ">
              <div className="rounded-full border p-4">
                <DownloadCloud className="size-8" />
              </div>
              <p className="text-sm text-muted-foreground">Drop the PDF here</p>
            </div>
          ) : file ? (
            <AcceptedFiles setFile={setFile} file={file} />
          ) : (
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="rounded-full border p-4">
                <UploadCloud className="size-8" />
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-medium">Upload your PDF</h3>

                <p className="text-sm text-muted-foreground">
                  Drag and drop your PDF here, or click to browse
                </p>
              </div>

              <div className="rounded-lg border px-3 py-1 text-xs text-muted-foreground">
                PDF only • Max 1 file
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
