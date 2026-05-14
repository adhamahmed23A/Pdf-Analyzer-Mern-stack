/* eslint-disable react-hooks/refs */
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Carousel, CarouselContent } from "@/components/ui/carousel";
import SliderItem from "./SliderItem";
import { useLatestMovies } from "@/hooks/useLatestMovies";

export default function HeroMovieCarousel() {
  const { data } = useLatestMovies();
  const plugin = React.useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
    }),
  );

  return (
    <div
      className="relative overflow-hidden rounded-lg"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%), linear-gradient(to top, transparent, black 20%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%), linear-gradient(to top, transparent, black 20%)",
        maskComposite: "intersect",
        WebkitMaskComposite: "source-in",
      }}
    >
      <Carousel
        plugins={[plugin.current]}
        opts={{
          loop: true,
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {data.results.map((movie) => (
            <SliderItem key={movie.id} movie={movie} />
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
