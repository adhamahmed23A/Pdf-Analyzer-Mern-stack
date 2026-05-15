import { tvSeriesService } from "@/services/TvSeriesService";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useAiringTodaySeries = () => {
  return useSuspenseQuery({
    queryKey: ["airing-today-Series"],
    queryFn: tvSeriesService.getAiringTodaySeries,
    staleTime: 1000 * 60 * 5, // cache is fresh for 5 minutes
    gcTime: 1000 * 60 * 10, // keep unused data in memory for 10 minutes
    retry: 2,
  });
};
