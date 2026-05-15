import { apiClient } from "@/api/axios";
import type { MovieType } from "@/types/movie.type";

export type PaginatedResponse<T> = {
  dates: { maximum: string; minimum: string };
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
};

const getLatestMovies = async (): Promise<PaginatedResponse<MovieType>> => {
  const response = await apiClient.get<PaginatedResponse<MovieType>>(
    "/movie/now_playing?language=en-US&page=1",
  );
  return response.data;
};

export const movieService = {
  getLatestMovies,
};
