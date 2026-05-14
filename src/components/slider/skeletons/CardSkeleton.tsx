import { Skeleton } from "@/components/ui/skeleton";

const CardSkeleton = () => {
  return (
    <div className="group relative lg:h-[80vh] h-[60vh] w-full overflow-hidden">
      {/* Background Image Skeleton */}
      <Skeleton className="absolute inset-0 h-full w-full" />

      {/* Shading / Fade Effect */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Cinematic Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />

      {/* Left Shadow Fade */}
      <div className="absolute inset-y-0 left-0 w-3/3 bg-gradient-to-r from-black/80 to-transparent" />

      {/* Content Skeleton */}
      <div className="absolute bottom-0 z-10 max-w-2xl p-10 md:p-16 w-full">
        <div className="flex flex-col gap-3">
          {/* Title Skeleton */}
          <div className="flex flex-col ">
            <Skeleton className="h-10 w-1/2 md:h-10" />
          </div>

          {/* Metadata Skeleton */}
          <div className="flex flex-wrap items-center gap-3 mt-2">
            <Skeleton className="h-5 w-12" />
            <Skeleton className="h-5 w-16" />
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-6 w-24 rounded-full" />
          </div>

          {/* Description Skeleton */}
          <div className="flex flex-col gap-2 max-w-xl mt-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>

          {/* Buttons Skeleton */}
          <div className="flex items-center gap-4 mt-8">
            <Skeleton className="h-10 w-32 rounded-md" />
            <Skeleton className="h-4 w-24 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
