import { api } from "@/api/axios";
type Data = {
  data: {
    signedUrl: string;
  };
  success: boolean;
};
export const uploadPdfAction = async (
  file: File,
  onProgress: (percent: number) => void,
  signal: AbortSignal,
) => {
  const formData = new FormData();
  formData.append("document", file);

  const { data } = await api.post<Data>("/api/document/upload", formData, {
    signal,
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress: (progressEvent) => {
      const percent = Math.round(
        (progressEvent.loaded * 100) / (progressEvent.total ?? 1),
      );
      onProgress(percent);
    },
  });
  return data;
};
