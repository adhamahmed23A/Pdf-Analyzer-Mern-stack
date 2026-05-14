import { Navbar } from "@/components/navbar/Navbar";
import { Outlet } from "react-router";


export const MainLayout = () => {
  return (
    <>
      <div className="min-h-svh bg-background">
        <Navbar />
        <main className="mx-auto max-w-7xl main-x-padding py-6 grid grid-cols-4 ">
          <Outlet/>
        </main>
      </div>
    </>
  );
};
