/**
 * Imports
 */

import Logo from "@/assets/svg/logo";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { SearchDialog } from "../search/search.dialog";
import { AppSidebarMainContent } from "./content/app.sidebar.main.content";
import { AppSidebarCollapsible } from "./content/app.sidebar.collapsible";
import { AppSidebarFooter } from "./footer/app.sidebar.footer";

export const AppSidebar = () => {
  return (
    <>
      <Sidebar collapsible="offcanvas" variant="inset">
        {/* Logo */}
        <SidebarHeader className="px-2">
          <div className="  flex items-center justify-between ">
            <Logo />
          </div>
        </SidebarHeader>
        {/* Content */}
        <SidebarContent className="px-2 flex flex-1 flex-col gap-4 mt-2 ">
          {/*Search Input */}
          <SearchDialog />
          {/* Workflow */}
          <AppSidebarMainContent />
          {/* History */}
          <AppSidebarCollapsible />

          {/* Footer */}
          <SidebarFooter className=" px-0 mt-auto  ">
            <AppSidebarFooter />
          </SidebarFooter>
        </SidebarContent>
      </Sidebar>
    </>
  );
};
