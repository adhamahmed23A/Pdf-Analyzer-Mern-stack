import { RequestHandler } from "express";
import { fromNodeHeaders } from "better-auth/node";
import { getAuth } from "../features/auth/better-auth.js";
import { AppError } from "../errors/app-error.js";
import { getHttpStatus } from "../constants/http.js";

export const authenticateMiddleware: RequestHandler = async (
  req,
  res,
  next,
) => {
  try {
    const session = await getAuth().api.getSession({
      headers: fromNodeHeaders(req.headers),
    });
    if (!session)
      throw new AppError(
        "Unauthenticated",
        getHttpStatus("UNAUTHORIZED"),
        "Session not found",
        false,
      );
    req.userId = session.session.userId;
    req.sessionId = session.session.id;
    next();
  } catch (error) {
    next(error);
  }
};
