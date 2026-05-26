import { Button } from "@/components/ui/button";
import { IconAnalyzeFilled, IconFileTypePdf } from "@tabler/icons-react";
import { X } from "lucide-react";
import { useCallback, useState } from "react";

type Props = {
  file: File;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
};

export const AcceptedFiles = ({ file, setFile }: Props) => {
  const [hovered, setHovered] = useState(false);

  const handleDelete = useCallback(() => {
    setFile(null);
  }, [setFile]);

  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div
        className="relative py-1 px-3 border border-border bg-background/40 rounded-sm text-sm flex items-center gap-2 cursor-default"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <IconFileTypePdf size={15} className="text-white/70" />
        <p className="text-white/70 font-semibold">{file.name.toLowerCase()}</p>

        {hovered && (
          <button
            onClick={handleDelete}
            className="absolute cursor-pointer -top-2 -right-2 bg-red-500 border border-border rounded-full p-1 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Remove file"
          >
            <X size={10} />
          </button>
        )}
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
