/**
 * Imports
 */

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { AppSidebarUser } from "./app.sidebar.user";
import { IconDotsVertical } from "@tabler/icons-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { AppSidebarFooterDropdown } from "./app.sidebar.footer.dropdown";

export const AppSidebarFooter = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <SidebarMenu className=" py-1.5 hover:bg-btn-secondary-hover rounded-lg">
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size="default"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground "
              >
                <AppSidebarUser />
                <IconDotsVertical className="ml-auto size-4" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
              side={isMobile ? "bottom" : "right"}
              align="end"
              sideOffset={4}
            >
              <AppSidebarFooterDropdown />
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </>
  );
};
