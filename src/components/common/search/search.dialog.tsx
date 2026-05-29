/**
 * Imports
 */
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SearchButton } from "./search.button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";

export const SearchDialog = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <SearchButton />
        </DialogTrigger>
        <DialogContent
          showCloseButton={false}
          className="sm:max-w-md p-2  border border-border bg-background"
        >
          <DialogHeader className=" rounded-lg  ">
            <InputGroup className="max-w-full">
              <InputGroupInput
                className="text-sm"
                placeholder="Search for a chat "
              />
              <InputGroupAddon>
                <Search />
              </InputGroupAddon>
            </InputGroup>
            <div className="relative  p-2 ">
              {/* Scrollable list */}
              <div className="flex flex-col gap-1 overflow-y-auto scrollbar-none py-0.5 h-50">
                {Array.from({ length: 30 }).map((_, index) => (
                  <div key={index}>
                    <span>Item {index + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};
