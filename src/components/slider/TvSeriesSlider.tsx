import { useAiringTodaySeries } from "@/hooks/useAiringTodaySeries";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { getImageUrl } from "@/utils/image.util";
import { motion } from "motion/react";
import { staggerVariant } from "@/constants/Variants";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { CircularProgress } from "./CircularProgress";
const TvSeriesSlider = () => {
  const { data } = useAiringTodaySeries();

  return (
    <>
      <div className="flex flex-col gap-4">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "none" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="ml-4 flex justify-between items-center"
        >
          <h1
            className="font-semibold text-lg 
          tracking-tight bg-clip-text text-transparent bg-linear-30 from-foreground to-foreground/30"
          >
            Airing Today
          </h1>
          <Button
            variant={"link"}
            className="font-medium underline text-sm 
          tracking-tight bg-clip-text text-transparent cursor-pointer bg-linear-30 from-foreground to-foreground/30"
          >
            See All <ArrowRight className="size-3.5 text-foreground/80" />
          </Button>
        </motion.div>
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
            <motion.div
              variants={staggerVariant.parentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="p-"
            >
              <CarouselContent className="w-full gap-2 ">
                {data.results.map((series) => (
                  <CarouselItem
                    key={series.id}
                    className="rounded-lg basis-1/2  md:basis-1/3  lg:basis-1/5 "
                  >
                    <motion.div
                      variants={staggerVariant.childVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className=" h-fit p-1 relative"
                    >
                      <div className="absolute inset-2 z-50">
                        <CircularProgress rating={series.vote_average} />
                      </div>
                      <img
                        src={getImageUrl(series.poster_path)}
                        alt={series.name}
                        className="rounded-lg h-80 w-full object-cover hover:scale-102 cursor-pointer transition-transform duration-300"
                      />
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </motion.div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default TvSeriesSlider;
