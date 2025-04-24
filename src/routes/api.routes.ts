// src/routes/api.routes.ts
import express from "express";
import { uploadHandler } from "../controllers/upload.controller";

const router = express.Router();

router.post("/upload", uploadHandler);

export default router;
