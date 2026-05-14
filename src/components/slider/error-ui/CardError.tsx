import { Button } from "@/components/ui/button";

interface CardErrorProps {
  reset: () => void;
}

const CardError = ({ reset }: CardErrorProps) => {
  return (
    <div className="group border rounded-lg lg:h-[80vh] h-[60vh] w-full overflow-hidden">
      <div className="flex flex-col justify-center items-center gap-4 w-full h-full">
        <h1 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-red-400/50 to-red-400">
          Error had occurred!
        </h1>
        <Button
          size={"lg"}
          variant={"default"}
          className="cursor-pointer px-5 font-semibold"
          onClick={reset}
        >
          Try Again
        </Button>
      </div>
    </div>
  );
};

export default CardError;
