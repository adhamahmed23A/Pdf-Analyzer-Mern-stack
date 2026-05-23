/**
 * Imports
 */

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SidebarData } from "@/constants/SidebarData";
import { NavLink } from "react-router";

export const AppSidebarMainContent = () => {
  return (
    <>
      <SidebarMenu className="flex gap-0.5">
        {SidebarData.main[0].links.map((item) => (
          <SidebarMenuItem key={item.label}>
            <SidebarMenuButton
              asChild
              className=" text-sm text-btn-secondary-text hover:bg-btn-secondary-hover cursor-pointer"
            >
              <NavLink to={item.href} className={"flex items-center gap-2"}>
                <item.icon />
                {item.label}
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </>
  );
};
