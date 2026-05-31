import { Spotlight } from "@/components/ui/spotlight";
import { Outlet } from "react-router";

export const AuthLayout = () => {
  return (
    <>
      <main className="w-full min-h-screen relative overflow-hidden ">
        <Spotlight
          className="top-0 left-0 md:-top-20 md:left-20"
          fill="#3852b4"
        />
        <div className="main-x-padding ">
          <Outlet />
        </div>
      </main>
    </>
  );
};
