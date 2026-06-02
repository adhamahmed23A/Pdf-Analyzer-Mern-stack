/**
 * Imports
 */
import { Skeleton } from "@/components/ui/skeleton";

export const SidebarUserSkeleton = () => {
  return (
    <>
      <Skeleton className="h-8 w-8 rounded-lg" />
      <div className="grid flex-1 gap-2">
        <Skeleton className="h-4 w-24 rounded" />
        <Skeleton className="h-3 w-32 rounded" />
      </div>
    </>
  );
};
