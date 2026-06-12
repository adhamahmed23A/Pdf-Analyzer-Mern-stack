import { randomUUID } from "crypto";
import path from "node:path";
import { supabase } from "../../../configs/supabase.js";
import { env } from "../../../configs/env.js";
import { documentErrorFactory } from "../errors/error-factory.js";
const { SUPABASE_BUCKET } = env;

const storage = supabase.storage.from(SUPABASE_BUCKET);
const upload = async (file: Express.Multer.File) => {
  console.log(file.mimetype);
  const ext = path.extname(file.originalname);
  const filePath = `${randomUUID()}${ext}`;
  const { data, error } = await storage.upload(filePath, file.buffer, {
    contentType: "application/pdf",
  });

  if (error) {
    throw documentErrorFactory.documentStorageError(error, false);
  }

  return filePath;
};
const getSignedUrl = (filePath: string) =>
  storage.createSignedUrl(filePath, 3600 * 24 * 7);

const deleteFile = async (filePath: string) => {
  const { data, error } = await storage.remove([filePath]);

  if (error) {
    throw documentErrorFactory.documentStorageError(error, false);
  }
  return data;
};
export const storageServices = { upload, getSignedUrl, deleteFile };
