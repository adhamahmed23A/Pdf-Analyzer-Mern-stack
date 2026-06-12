import { Skeleton } from "@/components/ui/skeleton";
import { FileText } from "lucide-react";

export const UploadSkeleton = () => {
  return (
    <div className="relative w-32 h-40 rounded-lg border border-border bg-muted/10 overflow-hidden shadow-sm">
      {/* Folded corner */}
      <div className="absolute top-0 right-0 w-0 h-0 border-t-[18px] border-l-[18px] border-t-brand-color/20 border-l-transparent" />

      <div className="w-full h-9 bg-gradient-to-br from-brand-color/15 to-brand-color/5 border-b border-border flex items-center px-3 gap-2">
        <FileText className="w-3.5 h-3.5 text-brand-color/40 shrink-0" />
        <Skeleton className="h-2 w-12 rounded-sm" />
      </div>

      <div className="p-3 space-y-2.5">
        <Skeleton className="h-1.5 w-full rounded-sm" />
        <Skeleton className="h-1.5 w-5/6 rounded-sm" />
        <Skeleton className="h-1.5 w-full rounded-sm" />
        <Skeleton className="h-1.5 w-4/6 rounded-sm" />
        <Skeleton className="h-1.5 w-5/6 rounded-sm" />
      </div>
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-foreground/5 to-transparent" />
    </div>
  );
};
