// src/services/upload.service.ts
import { uploadPdfToS3 } from "../utils/s3";

export const uploadPdf = async (filename: string, content: string) => {
  return uploadPdfToS3(filename, content);
};
