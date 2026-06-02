import { SessionContext } from "@/contexts/user.context";
import { authClient } from "@/routes/auth/lib/auth-client";
import { useState } from "react";

interface SessionProviderProps {
  children: React.ReactNode;
}
export function SessionProvider({ children }: SessionProviderProps) {
  const { data, isPending: isLoading } = authClient.useSession();
  const [isLoggingOut, setIsLoggingOut] = useState<boolean>(false);
  return (
    <SessionContext.Provider
      value={{
        isLoading,
        session: data?.session ?? null,
        user: data?.user ?? null,
        isLoggingOut,
        setIsLoggingOut,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}
