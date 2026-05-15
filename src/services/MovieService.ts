import { apiClient } from "@/api/axios";
import type { MovieType } from "@/types/movie.type";

export type PaginatedResponse<T> = {
  dates: { maximum: string; minimum: string };
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
};

export type MovieVideoType = {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  id: string;
  published_at: string; // ISO 8601 date string
};

type MovieVideoResponse = {
  id: number;
  results: MovieVideoType[];
};

const getLatestMovies = async (): Promise<PaginatedResponse<MovieType>> => {
  const response = await apiClient.get<PaginatedResponse<MovieType>>(
    "/movie/now_playing?language=en-US&page=1",
  );
  return response.data;
};

const getMovieVideo = async (id: number) => {
  const response = await apiClient.get<MovieVideoResponse>(
    `/movie/${id}/videos?language=en-US`,
  );
  return response.data.results.filter(
    (video) => video.type === "Trailer" && video.site === "YouTube",
  )[0];
};

export const movieService = {
  getLatestMovies,
  getMovieVideo,
};
