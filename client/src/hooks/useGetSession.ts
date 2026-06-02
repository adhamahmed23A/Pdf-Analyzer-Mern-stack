import {
  SessionContext,
  type SessionContextType,
} from "@/contexts/user.context";
import { useContext } from "react";

export const useGetSession = (): SessionContextType => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useGetSession must be used within a SessionProvider.");
  }
  return context;
};
