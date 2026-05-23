/**
 * Imports
 */

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { SearchIcon } from "lucide-react";

export const SearchButton = () => {
  return (
    <>
      <Button
        className={cn(
          "w-full flex justify-start items-center cursor-pointer ",
          "bg-input-bg hover:bg-input-bg-hover border border-border rounded-md",
          "text-sm font-normal text-input-placeholder",
        )}
      >
        <SearchIcon /> Search for a chat
      </Button>
    </>
  );
};
