// DashboardLayout.tsx

import { Outlet } from "react-router";

import { AppHeader } from "@/components/common/sidebar/app.header";
import { AppSidebar } from "@/components/common/sidebar/app.sidebar";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset className="m-0! flex min-h-screen flex-1 flex-col p-0!">
        <AppHeader />

        <main className="flex flex-1 flex-col overflow-hidden min-h-0">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};
