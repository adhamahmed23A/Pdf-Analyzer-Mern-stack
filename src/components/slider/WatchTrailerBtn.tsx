import { useState } from "react";
import { AspectRatio } from "../ui/aspect-ratio";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import ReactPlayer from "react-player";
import { useQuery } from "@tanstack/react-query";
import { movieService } from "@/services/MovieService";
import { Spinner } from "../ui/spinner";
const WatchTrailerBtn = ({ id }: { id: number }) => {
  const [enabled, setEnabled] = useState<boolean>(false);
  const [waiting, setWaiting] = useState<boolean>(false);

  const { data, isLoading } = useQuery({
    queryKey: ["movieVideo", id],
    queryFn: () => movieService.getMovieVideo(id),
    enabled,
  });
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            onClick={() => setEnabled(true)}
            className="cursor-pointer p-5 font-normal hover:bg-primary/90 transition-all tracking-tight text-base mt-8"
          >
            Watch Trailer
          </Button>
        </DialogTrigger>
        <DialogContent
          showCloseButton={false}
          className="lg:max-w-150 p-0 w-full h-auto bg-transparent border-0 shadow-none "
        >
          <AspectRatio ratio={16 / 9}>
            {waiting || isLoading ? (
              <div className="flex items-center justify-center h-full">
                <Spinner className="size-16 " />
              </div>
            ) : (
              <div
                style={{
                  borderRadius: "8px",
                  overflow: "hidden",
                  width: "100%",
                  height: "100%",
                }}
              >
                <ReactPlayer
                  width="100%"
                  height="100%"
                  controls
                  onWaiting={() => setWaiting(true)}
                  onReady={() => setWaiting(false)}
                  src={`https://www.youtube.com/watch?v=${data?.key}`}
                />
              </div>
            )}
          </AspectRatio>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WatchTrailerBtn;
