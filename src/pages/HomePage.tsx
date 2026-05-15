import CardError from "@/components/slider/error-ui/CardError";
import SeriesError from "@/components/slider/error-ui/SeriesError";
import HeroMovieCarousel from "@/components/slider/HeroMovieCarousel";
import CardSkeleton from "@/components/slider/skeletons/CardSkeleton";
import SeriesSkeleton from "@/components/slider/skeletons/SeriesSkeleton";
import TvSeriesSlider from "@/components/slider/TvSeriesSlider";
import { queryClient } from "@/main";
import { Suspense } from "react";
import { ErrorBoundary, type FallbackProps } from "react-error-boundary";
const HomePage = () => {
  return (
    <>
      <div className=" col-start-1 col-span-4  ">
        <ErrorBoundary
          fallbackRender={({ resetErrorBoundary }: FallbackProps) => (
            <CardError
              reset={() => {
                queryClient.resetQueries({ queryKey: ["latest-movies"] });
                resetErrorBoundary();
              }}
            />
          )}
        >
          <Suspense fallback={<CardSkeleton />}>
            <HeroMovieCarousel />
          </Suspense>
        </ErrorBoundary>
      </div>
      <div className="col-start-1  col-span-4   ">
        <ErrorBoundary
          fallbackRender={({ resetErrorBoundary }) => (
            <SeriesError
              reset={() => {
                queryClient.resetQueries({ queryKey: ["airing-today-Series"] });
                resetErrorBoundary();
              }}
            />
          )}
        >
          <Suspense fallback={<SeriesSkeleton />}>
            <TvSeriesSlider />
          </Suspense>
        </ErrorBoundary>
      </div>
    </>
  );
};

export default HomePage;
