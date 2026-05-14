import CardError from "@/components/slider/error-ui/CardError";
import HeroMovieCarousel from "@/components/slider/HeroMovieCarousel";
import CardSkeleton from "@/components/slider/skeletons/CardSkeleton";
import { queryClient } from "@/main";
import { Suspense } from "react";
import { ErrorBoundary, type FallbackProps } from "react-error-boundary";
const HomePage = () => {
  return (
    <>
      <div className="grid-background col-start-1 col-span-4 lg:col-span-3  ">
        <ErrorBoundary fallbackRender={({ resetErrorBoundary }:FallbackProps) => <CardError reset={()=>{
          queryClient.resetQueries({queryKey:['latest-movies']})
          resetErrorBoundary()

        }} />} >
          <Suspense fallback={<CardSkeleton />}>
            <HeroMovieCarousel />
          </Suspense>
        </ErrorBoundary>
      </div>
    </>
  );
};

export default HomePage;
