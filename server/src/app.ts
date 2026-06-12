import express, { Application, Request, Response } from "express";
import { errorMiddleware } from "./middlewares/error-middleware.js";
import { toNodeHandler } from "better-auth/node";
import cors from "cors";
// ── Import Routes ──────────────────────────────────────────────
import { getAuth } from "./features/auth/better-auth.js";
import { asyncHandler } from "./utils/async-handler.js";

export const createApp = (): Application => {
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

  // ── Body Parsing ──────────────────────────────────────────
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // ── Better-Auth Configuration ──────────────────────────────────────────────────

  app.all("/api/auth/*splat", toNodeHandler(getAuth()));

  // ── Static Assets ──────────────────────────────────────────
  app.use(express.static("public"));

  // ── Health Check ──────────────────────────────────────────
  app.get("/health", (_req: Request, res: Response) => {
    res.json({ status: "ok", env: NODE_ENV });
  });

  // ── Routes ────────────────────────────────────────────────
  // app.use("/api/users", userRouter)
  let documentRouter: express.Router | undefined;

  app.use(
    "/api/document",
    asyncHandler(async (req, res, next) => {
      if (!documentRouter) {
        const { default: router } =
          await import("./features/document/document-route.js");
        documentRouter = router;
      }
      documentRouter(req, res, next);
    }),
  );

  // ── 404 Handler ───────────────────────────────────────────

  // ── Global Error Middleware ──────────────────────────────────
  app.use(errorMiddleware);

  return app;
};
