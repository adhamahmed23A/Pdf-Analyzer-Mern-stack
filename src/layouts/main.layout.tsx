/*
 * Imports
 */
import Header from "@/components/common/header/header";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <main className="mx-auto w-full">
      <Header />
      <Outlet />
    </main>
  );
};

export default MainLayout;
