/*
 * Imports
 */
import Header from "@/components/common/header/header";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Page content */}
      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
