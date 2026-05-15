import { useAiringTodaySeries } from "@/hooks/useAiringTodaySeries";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { getImageUrl } from "@/utils/image.util";

const TvSeriesSlider = () => {
  const { data } = useAiringTodaySeries();

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="ml-4">
          <h1 className="font-semibold text-lg tracking-tight bg-clip-text text-transparent bg-linear-30 from-foreground to-foreground/30">
            Airing Today
          </h1>
        </div>
        <div className="relative overflow-hidden min-w-0">
          <div
            className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10
        bg-linear-to-r from-[#080808] to-transparent"
          />

          {/* Right fade */}
          <div
            className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10
        bg-linear-to-l from-[#080808] to-transparent"
          />

          <Carousel
            opts={{
              align: "start",
              dragFree: true,
            }}
            className="w-full "
          >
            <CarouselContent className="w-full h-80 px-5 gap-6 ">
              {data.results.map((series) => (
                <CarouselItem className="rounded-lg basis-1/2  md:basis-1/3 p-0 lg:basis-1/5 ">
                  <img
                    src={getImageUrl(series.poster_path)}
                    alt={series.name}
                    className="h-full w-full object-cover  rounded-lg"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default TvSeriesSlider;
