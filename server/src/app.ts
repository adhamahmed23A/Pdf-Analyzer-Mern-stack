import express, { Application, Request, Response } from "express";
import { errorMiddleware } from "./middlewares/error.middleware.js";
import { toNodeHandler } from "better-auth/node";
import cors from "cors";
import { Auth } from "./features/auth/lib/better-auth.js";
export const createApp = (auth: Auth): Application => {
  const app = express();
  const NODE_ENV = process.env.NODE_ENV;
  const CLIENT_URL = process.env.CLIENT_URL;
  // ── Security ──────────────────────────────────────────────
  // app.use(helmet());

  // ── CORS ──────────────────────────────────────────────────
  app.use(
    cors({
      origin: CLIENT_URL,
      credentials: true, // required for Better Auth cookies
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
    }),
  );

  // ── Better-Auth Configuration ──────────────────────────────────────────────────
  app.all("/api/auth/*splat", toNodeHandler(auth));

  // ── Body Parsing ──────────────────────────────────────────
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // ── Health Check ──────────────────────────────────────────
  app.get("/health", (_req: Request, res: Response) => {
    res.json({ status: "ok", env: NODE_ENV });
  });

  // ── Routes ────────────────────────────────────────────────
  // app.use("/api/users", userRouter)
  // app.use("/api/posts", postRouter)

  // ── 404 Handler ───────────────────────────────────────────
  app.use((_req: Request, res: Response) => {
    res.status(404).json({ message: "Route not found" });
  });

  // ── Global Error Middleware ──────────────────────────────────
  app.use(errorMiddleware);

  return app;
};
