import { AppSpinner } from "@/components/app.spinner";
import { useGetSession } from "@/hooks/useGetSession";
import { Navigate } from "react-router";
type ProtectedRouteProps = {
  children: React.ReactNode;
};
export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isLoading, session, isLoggingOut, user } = useGetSession();
  if (isLoading) return <AppSpinner />;
  if (isLoggingOut) return <Navigate to="/" replace />;
  if (!session) return <Navigate to="/auth/login" replace />;

  return <>{children}</>;
};
