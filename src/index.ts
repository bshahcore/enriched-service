// src/index.ts
import express from "express";
import dotenv from "dotenv";
import apiRoutes from "./routes/api.routes";

dotenv.config();

const app = express();
app.use(express.json({ limit: "10mb" })); // allow large PDF
app.use("/api", apiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
