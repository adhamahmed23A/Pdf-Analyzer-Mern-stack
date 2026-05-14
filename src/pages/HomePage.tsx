import CardError from "@/components/slider/error-ui/CardError";
import HeroMovieCarousel from "@/components/slider/HeroMovieCarousel";
import CardSkeleton from "@/components/slider/skeletons/CardSkeleton";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
const HomePage = () => {
  return (
    <>
      <div className=" col-start-1 col-span-4 lg:col-span-3 ">
        <ErrorBoundary fallback={<CardError />}>
          <Suspense fallback={<CardSkeleton />}>
            <HeroMovieCarousel />
          </Suspense>
        </ErrorBoundary>
      </div>
    </>
  );
};

export default HomePage;
