// src/controllers/upload.controller.ts
import { Request, Response } from "express";
import { uploadPdf } from "../services/upload.service";

export const uploadHandler = async (req: Request, res: Response) : Promise<void> => {
  const { filename, fileContent } = req.body;

  if (!filename || !fileContent) {
     res.status(400).json({ error: "Missing filename or content" });
  }

  try {
    const fileUrl = await uploadPdf(filename, fileContent);
     res.status(200).json({ message: "Uploaded!", url: fileUrl }); // ✅ return here is fine
  } catch (error) {
    console.error(error);
     res.status(500).json({ error: "Upload failed" }); // ✅ also good
  }
};
