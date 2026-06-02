/*
 * Imports
 */
import { AppSpinner } from "@/components/app.spinner";
import { Footer } from "@/components/common/footer/footer";
import Header from "@/components/common/header/header";
import Divider from "@/components/ui/divider";
import { useGetSession } from "@/hooks/useGetSession";
import { Outlet } from "react-router";

const MainLayout = () => {
  const { isLoading } = useGetSession();
  if (isLoading) return <AppSpinner />;
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
