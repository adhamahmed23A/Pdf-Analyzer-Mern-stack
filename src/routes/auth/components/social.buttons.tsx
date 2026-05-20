/*
 * Imports
 */
import { Button } from "@/components/ui/button";
import {
  IconBrandGithubFilled,
  IconBrandGoogleFilled,
} from "@tabler/icons-react";
export const SocialButtons = () => {
  return (
    <div className="w-full flex justify-between items-center gap-4 ">
      <div className="w-1/2 ">
        <Button className=" w-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900/60 dark:hover:bg-zinc-800/80 border border-zinc-300 dark:border-zinc-600/40 text-zinc-800 dark:text-zinc-200 rounded-sm flex items-center justify-center gap-1 cursor-pointer transition-colors duration-200">
          <IconBrandGoogleFilled color="currentColor" />
          Google
        </Button>
      </div>
      <div className="w-1/2 ">
        <Button className="w-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900/60 dark:hover:bg-zinc-800/80 border border-zinc-300 dark:border-zinc-600/40 text-zinc-800 dark:text-zinc-200 rounded-sm flex items-center justify-center gap-1 cursor-pointer transition-colors duration-200">
          <IconBrandGithubFilled color="currentColor" />
          Github
        </Button>
      </div>
    </div>
  );
};
