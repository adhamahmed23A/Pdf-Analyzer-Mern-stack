// @/utils/image.util.ts

const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

export type ImageSize =
  | "w92"
  | "w154"
  | "w185"
  | "w342"
  | "w500"
  | "w780"
  | "original";

export const getImageUrl = (
  path: string,
  size: ImageSize = "original",
): string => {
  return `${TMDB_IMAGE_BASE_URL}/${size}${path}`;
};
