import { ArrowRight, Star } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { CarouselItem } from "../ui/carousel";
import { motion } from "motion/react";
import type { MovieType } from "@/types/movie.type";
import { getImageUrl } from "@/utils/image.util";
import { getGenre } from "@/utils/genre.util";
import { handleDescribtion } from "@/utils/describtionInCard.util";

type Props = {
  movie: MovieType;
};

// Stagger animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const SliderItem = ({ movie }: Props) => {
  const releaseYear = new Date(movie.release_date).getFullYear();

  return (
    <CarouselItem key={movie.id}>
      <div className="group relative lg:h-[80vh] h-[60vh] w-full overflow-hidden">
        {/* Background Image */}
        <img
          src={getImageUrl(movie.backdrop_path)}
          alt={movie.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[4000ms] group-hover:scale-105"
        />

        {/* Shading / Fade Effect */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Cinematic Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />

        {/* Left Shadow Fade */}
        <div className="absolute inset-y-0 left-0 w-3/3 bg-gradient-to-r from-black/80 to-transparent" />

        {/* Content */}
        <motion.div
          className="absolute bottom-0 z-10 max-w-2xl p-10 md:p-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col gap-3">
            {/* Title */}
            <motion.h1
              variants={childVariants}
              className="text-3xl font-black tracking-tight bg-clip-text text-transparent bg-linear-to-l from-primary to-gray-200/60 md:text-6xl"
            >
              {movie.title}
            </motion.h1>

            {/* Metadata Badges */}
            <motion.div
              variants={childVariants}
              className="flex flex-wrap items-center gap-2"
            >
              <div className="flex gap-1 mt-1 items-center text-sm text-foreground/75 font-sans font-normal tracking-wide">
                <Star className="size-4 text-amber-300" fill="currentColor" />
                <span>{movie.vote_average.toFixed(1)}</span>
              </div>

              <span className="text-sm mt-1 text-foreground/75">
                {releaseYear}
              </span>

              {getGenre(movie.genre_ids).map((genre) => (
                <div key={genre}>
                  <Badge
                    variant="outline"
                    className="py-2.5 text-foreground/75"
                  >
                    {genre}
                  </Badge>
                </div>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p
              variants={childVariants}
              className="max-w-xl text-[17px] tracking-normal text-primary/90"
            >
              {handleDescribtion(movie.overview)}
            </motion.p>
          </div>

          {/* Buttons */}
          <motion.div
            variants={childVariants}
            className="flex items-center gap-4"
          >
            <Button className="cursor-pointer p-5 font-normal hover:bg-primary/90 transition-all tracking-tight text-base mt-8">
              Watch Trailer
            </Button>
            <Button
              variant={"link"}
              className="cursor-pointer p-5 flex justify-center items-center font-normal transition-all tracking-tight text-base text-foreground/70 mt-8"
            >
              <span>See More</span>
              <ArrowRight />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </CarouselItem>
  );
};

export default SliderItem;
