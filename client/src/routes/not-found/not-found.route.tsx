import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
export const NotFoundRoute = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen  flex flex-col gap-2 justify-center items-center">
      <div className="flex flex-col ">
        <h1 className=" text-4xl sm:text-6xl md:text-9xl to-brand-color">
          404
        </h1>
        <p className="font-bold text-3xl tracking-tight bg-clip-text text-transparent bg-linear-120 dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-500 from-zinc-700  to-zinc-900 text-center">
          Page Not Found
        </p>
      </div>
      <div className="flex gap-2">
        <Button
          variant="outline"
          className="mt-4 rounded-md bg-brand-color! hover:bg-btn-brand-hover! duration-200! font-normal! cursor-pointer text-white!"
          onClick={() => navigate("/")}
        >
          Go Home
        </Button>
      </div>
    </div>
  );
};
