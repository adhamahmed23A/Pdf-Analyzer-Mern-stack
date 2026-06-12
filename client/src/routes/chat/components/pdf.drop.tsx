import { useCallback, useState } from "react";
import { useDropzone, type FileRejection } from "react-dropzone";
import { cn } from "@/lib/utils";
import { Upload, FileText, X } from "lucide-react";
import { useUploadPdf } from "../hooks/useUploadPdf";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { UploadSkeleton } from "./skeletons/pdf.upload.skeleton";

export const PdfDrop = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { upload, isPending, cancel } = useUploadPdf({
    setSelectedFile,
  });

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setSelectedFile(acceptedFiles[0]);
    }
  }, []);
  const onDropRejected = useCallback((fileRejections: FileRejection[]) => {
    const code = fileRejections[0].errors[0].code;
    if (code === "file-too-large") {
      toast.error("File is larger than 10MB");
    }
    if (code === "file-invalid-type") {
      toast.error("File type must be Pdf");
    }
  }, []);
  const handleAnalyzeNow = useCallback(() => {
    if (selectedFile) {
      upload(selectedFile);
    }
  }, [selectedFile, upload]);

  const handleRemoveFile = useCallback(() => {
    setSelectedFile(null);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "application/pdf": [".pdf"] },
    maxFiles: 1,
    maxSize: 10 * 1024 * 1024,
    onDrop,
    onDropRejected,
    disabled: selectedFile !== null,
  });
  const documentName = useCallback((docName: string) => {
    if (docName.length > 25) {
      return `${docName.substring(0, 25)}...`;
    }
    return docName;
  }, []);
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
  };
  // Show selected PDF confirmation screen
  if (selectedFile) {
    return (
      <div className="w-full h-full flex items-center justify-center p-4">
        <div className="w-full max-w-md flex flex-col items-center justify-center gap-6 p-8 rounded-xl border border-border">
          {/* File Icon */}
          {isPending ? (
            <UploadSkeleton />
          ) : (
            <>
              <div className="p-4 rounded-lg bg-gradient-to-br from-brand-color/20 to-brand-color/10 border border-brand-color/20">
                <FileText className="w-7 h-7 text-brand-color/40" />
              </div>

              {/* File Info */}
              <div className="relative w-fit text-center  flex flex-col gap-2">
                <h3 className="font-semibold text-lg  text-foreground line-clamp-2">
                  {documentName(selectedFile.name)}
                </h3>
                <p className="text-sm text-muted-foreground ">
                  {formatFileSize(selectedFile.size)}
                </p>
                <Button
                  onClick={handleRemoveFile}
                  variant="destructive"
                  size="icon"
                  className="absolute -top-4 -right-4 h-6 w-6 rounded-full shadow-md z-10"
                >
                  <X className="w-3 h-3" />
                </Button>
              </div>
            </>
          )}

          {/* Actions */}
          <div className="max-w-fit flex flex-col gap-3">
            <Button
              onClick={isPending ? cancel : handleAnalyzeNow}
              className="bg-btn-brand hover:bg-btn-brand-hover font-normal text-sm text-white cursor-pointer  "
              variant={isPending ? "destructive" : "default"}
            >
              {isPending ? "Cancel Now" : "Analyze Now"}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Show upload dropzone
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div
        {...getRootProps()}
        className={cn(
          "w-full max-w-md aspect-square flex flex-col items-center justify-center rounded-xl border-2 border-dashed transition-all duration-200 cursor-pointer group/dropzone",
          "border-border bg-background/50",
          "hover:border-brand-color/30 hover:bg-primary/5 hover:shadow-lg",
          "dark:bg-background dark:hover:bg-brand-color/5",
          isDragActive &&
            "border-brand-color/50 bg-brand-color/10 shadow-lg ring-2 ring-brand-color/20",
        )}
      >
        <input {...getInputProps()} />

        {/* Icon */}
        <div
          className={cn(
            "mb-4 p-4 rounded-lg transition-all duration-200",
            "bg-muted group-hover/dropzone:bg-brand-color/15",
            isDragActive && "bg-brand-color/30 scale-105 duration-200",
          )}
        >
          {isDragActive ? (
            <Upload className="w-8 h-8 text-primary" />
          ) : (
            <FileText className="w-8 h-8 text-muted-foreground group-hover/dropzone:text-primary" />
          )}
        </div>

        {/* Text Content */}
        <div className="text-center">
          <h3
            className={cn(
              "font-semibold text-base mb-1 transition-colors duration-200",
              "text-foreground group-hover/dropzone:text-primary",
              isDragActive && "text-primary",
            )}
          >
            {isDragActive ? "Drop your PDF here" : "Upload PDF"}
          </h3>
          <p className="text-sm text-muted-foreground mb-2">
            {isDragActive
              ? "Release to upload"
              : "Drag and drop your PDF file here"}
          </p>
          <p className="text-xs text-muted-foreground">
            or click to select a file
          </p>
        </div>

        {/* Supported format */}
        <div className="mt-4 px-3 py-1.5 rounded-md bg-muted/50 text-xs text-muted-foreground">
          PDF files only
        </div>
      </div>
    </div>
  );
};
