import { Router } from "express";
import { uploadDocumentMiddleware } from "./middlewares/upload-document-middlware.js";
const route = Router();
route.post("/upload", uploadDocumentMiddleware);
export default route;
