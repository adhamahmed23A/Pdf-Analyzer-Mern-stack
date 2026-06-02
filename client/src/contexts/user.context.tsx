import type { TSession, TUser } from "@/routes/auth/types/auth.type";
import { createContext } from "react";

export interface SessionContextType {
  user: TUser | null;
  session: TSession | null;
  isLoading: boolean;
  isLoggingOut: boolean;
  setIsLoggingOut: React.Dispatch<React.SetStateAction<boolean>>;
}
export const SessionContext = createContext<SessionContextType | null>(null);
