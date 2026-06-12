import { Router } from "express";
import { uploadDocumentMiddleware } from "./middlewares/upload-document-middlware.js";
import { authenticateMiddleware } from "../../middlewares/authenticate-middleware.js";
import { documentController } from "./document-controller.js";
const route = Router();
route.use(authenticateMiddleware);
route.post(
  "/upload",
  uploadDocumentMiddleware,
  documentController.processDocument,
);
export default route;
