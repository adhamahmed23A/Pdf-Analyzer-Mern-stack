/*
 * Imports
 */
import { Footer } from "@/components/common/footer/footer";
import Header from "@/components/common/header/header";
import Divider from "@/components/ui/divider";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <main className="mx-auto w-full">
      <Header />
      <Outlet />
      <div className="main-x-padding">
        <Divider variant="solid" className="mb-12" />
      </div>
      <Footer />
    </main>
  );
};

export default MainLayout;
