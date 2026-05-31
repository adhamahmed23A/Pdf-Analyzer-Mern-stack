/**
 * Imports
 */

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { SidebarGroup, SidebarGroupLabel } from "@/components/ui/sidebar";
import { ChevronRight } from "lucide-react";
import { AppSidebarCollapsibleContent } from "./app.sidebar.collapsible.content";

export const AppSidebarCollapsible = () => {
  return (
    <>
      <Collapsible defaultOpen className="group/collapsible ">
        <SidebarGroup>
          <SidebarGroupLabel
            asChild
            className="group/label text-sm p-0 cursor-pointer"
          >
            <CollapsibleTrigger className=" gap-1 text-btn-secondary-text hover:text-btn-secondary-text/80  transition-all">
              History
              <ChevronRight
                size={14}
                className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90"
              />
            </CollapsibleTrigger>
          </SidebarGroupLabel>

          <CollapsibleContent>
            <AppSidebarCollapsibleContent />
          </CollapsibleContent>
        </SidebarGroup>
      </Collapsible>
    </>
  );
};
