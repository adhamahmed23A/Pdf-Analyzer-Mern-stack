import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
type Props = {
  className?: string;
  type: "mobile" | "desktop";
};
const Search = ({ className, type = "desktop" }: Props) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          {type === "desktop" ? (
            <Button
              size={"icon"}
              variant={"outline"}
              className={cn(
                "text-muted-foreground hover:text-foreground/70 cursor-pointer",
                className,
              )}
            >
              <SearchIcon />
            </Button>
          ) : (
            <InputGroup className="w-full bg-accent hover:bg-accent/40 transition-all cursor-pointer">
              <InputGroupInput
                placeholder="Search..."
                readOnly
                className="text-sm tracking-tight"
              />
              <InputGroupAddon>
                <SearchIcon />
              </InputGroupAddon>
            </InputGroup>
          )}
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Search;
