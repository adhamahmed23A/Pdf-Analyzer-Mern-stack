import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Share2Icon, Upload } from "lucide-react";

export function AppHeader() {
  const { state } = useSidebar();
  return (
    <>
      <header className="flex h-14 shrink-0 justify-between items-center gap-2 border-b px-4">
        {/* Toggle Sidebar Button */}
        <Tooltip delayDuration={300}>
          <TooltipTrigger asChild>
            <SidebarTrigger className="-ml-1" />
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>{state === "expanded" ? "Close" : "Open"} Sidebar</p>
          </TooltipContent>
        </Tooltip>
        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button
            variant={"default"}
            className="bg-btn-secondary hover:bg-btn-secondary-hover border border-border text-btn-secondary-text cursor-pointer text-sm font-normal "
          >
            <Share2Icon /> Share
          </Button>
          <Button
            className="bg-brand-color hover:bg-brand-color/90 font-normal text-sm text-white cursor-pointer  "
            variant={"default"}
          >
            <Upload /> Upload New PDF
          </Button>
        </div>
      </header>
    </>
  );
}
