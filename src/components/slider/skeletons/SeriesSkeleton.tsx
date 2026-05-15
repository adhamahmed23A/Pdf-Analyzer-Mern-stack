import { Skeleton } from "@/components/ui/skeleton";

const SeriesSkeleton = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="ml-4">
        <Skeleton className="h-6 w-28 rounded-md" />
      </div>
      <div className="relative overflow-hidden min-w-0 rounded-lg">
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10
            bg-linear-to-r from-[#080808] to-transparent"
        />
        {/* Right fade */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10
            bg-linear-to-l from-[#080808] to-transparent"
        />
        <div className="w-full rounded-lg ">
          <div className="w-full  flex h-80  gap-6 ">
            {Array.from({ length: 4 }).map(() => (
              <Skeleton className="h-full w-full  bg-muted/30 object-cover  rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeriesSkeleton;
