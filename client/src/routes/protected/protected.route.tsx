import { AppSpinner } from "@/components/app.spinner";
import { authClient } from "../auth/lib/auth-client";
import { Navigate } from "react-router";
type ProtectedRouteProps = {
  children: React.ReactNode;
};
export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { data: session, isPending } = authClient.useSession();
  if (isPending) return <AppSpinner />;
  if (!session) return <Navigate to="/auth/login" replace />;
  return <>{children}</>;
};
