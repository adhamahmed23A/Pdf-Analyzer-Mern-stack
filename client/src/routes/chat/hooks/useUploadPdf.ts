import { useMutation } from "@tanstack/react-query";
import { uploadPdfAction } from "../actions";
import { useCallback, useRef, useState } from "react";
import { toast } from "sonner";
import axios from "axios";
import { usePdf } from "./usePdf";

type TUploadPdf = {
  setSelectedFile: React.Dispatch<React.SetStateAction<File | null>>;
};

export const useUploadPdf = ({ setSelectedFile }: TUploadPdf) => {
  const abortControllerRef = useRef<AbortController | null>(null);
  const { setFileUrl } = usePdf();
  const [progress, setProgress] = useState(0);
  const { mutate, isPending } = useMutation({
    mutationFn: (file: File) => {
      abortControllerRef.current = new AbortController();

      return uploadPdfAction(
        file,
        setProgress,
        abortControllerRef.current.signal,
      );
    },

    onSuccess: (data) => {
      setFileUrl(data.data.signedUrl);
      setSelectedFile(null);
      toast.success("PDF is analyzed successfully");
    },

    onError: (error) => {
      setProgress(0);
      if (axios.isCancel(error)) {
        toast.warning("Upload is cancelled");
        return;
      }

      toast.error("Upload failed, please try again");
    },

    onSettled: () => {
      abortControllerRef.current = null;
      setTimeout(() => setProgress(0), 1500);
    },
  });

  const cancel = useCallback(() => {
    abortControllerRef.current?.abort();
  }, []);
  return {
    progress,
    upload: mutate,
    isPending,
    cancel,
  };
};
