import type { Auth } from "@/../../server/src/features/auth/lib/better-auth";
import { authClient } from "../lib/auth-client";
export type TAuth = Auth;

export type TUser = typeof authClient.$Infer.Session.user;
export type TSession = typeof authClient.$Infer.Session.session;
