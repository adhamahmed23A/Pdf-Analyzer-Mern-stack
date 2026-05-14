import { movieService } from "@/services/MovieService";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useLatestMovies = () => {
  return useSuspenseQuery({
    queryKey: ["latest-movies"],
    queryFn: movieService.getLatestMovies,
    staleTime: 1000 * 60 * 5, // cache is fresh for 5 minutes
    gcTime: 1000 * 60 * 10, // keep unused data in memory for 10 minutes
    retry: 2,
  });
};
