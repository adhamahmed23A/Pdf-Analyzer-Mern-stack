import { Button } from "@/components/ui/button";
import { IconAnalyzeFilled } from "@tabler/icons-react";
import { FileTextIcon, X } from "lucide-react";
import { useCallback } from "react";
import type { IUploadedFile } from "../types/file.type";

type Props = {
  file: IUploadedFile;
  setFile: React.Dispatch<React.SetStateAction<IUploadedFile | null>>;
};

export const AcceptedFiles = ({ file, setFile }: Props) => {
  const handleDelete = useCallback(() => {
    setFile(null);
  }, [setFile]);

  return (
    <div className="w-full flex flex-col items-center gap-4 text-center">
      <div className="border border-border hover:bg-background/70 p-2.5 w-full max-w-2/4 h-16 bg-background rounded-lg flex items-center justify-between">
        <div className="inline-flex items-center gap-4 h-full  ">
          <div className="h-full flex items-center bg-muted p-2 px-3  rounded-md">
            <FileTextIcon className=" text-white/70 w-4 h-4 " />
          </div>
          <div className="flex flex-col items-start justify-center h-full ">
            <p className="text-sm font-medium text-white/80 ">{file.name}</p>
            <p className="text-xs text-white/50 font-normal ">{file.type}</p>
          </div>
        </div>
        <Button
          variant="destructive"
          className="h-6.5 w-6.5 cursor-pointer rounded-sm p-0 flex items-center justify-center text-white/70 hover:bg-red-500/10 hover:text-red-500 "
          onClick={handleDelete}
        >
          <X className="size-4" />
        </Button>
      </div>
      <Button
        className=" bg-brand-color hover:bg-brand-color/90 font-normal text-sm text-white cursor-pointer"
        variant="default"
      >
        <IconAnalyzeFilled /> Analyze Now
      </Button>
    </div>
  );
};
