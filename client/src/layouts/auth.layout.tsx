import { AppSpinner } from "@/components/app.spinner";
import { Spotlight } from "@/components/ui/spotlight";
import { authClient } from "@/routes/auth/lib/auth-client";
import { Navigate, Outlet } from "react-router";

export const AuthLayout = () => {
  const { data: session, isPending } = authClient.useSession();
  if (isPending) return <AppSpinner />;
  if (session) return <Navigate to="/chat/new" replace />;
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
