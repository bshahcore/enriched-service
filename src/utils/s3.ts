// src/utils/s3.ts
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { config } from "dotenv";

config(); // Loads .env file

const s3 = new S3Client({ region: "us-east-1" }); // change region as needed

export const uploadPdfToS3 = async (filename: string, contentBase64: string) => {
  const command = new PutObjectCommand({
    Bucket: process.env.S3_BUCKET_NAME!,
    Key: `uploads/${filename}`,
    Body: Buffer.from(contentBase64, "base64"),
    ContentType: "application/pdf",
  });

  await s3.send(command);
  return `https://${process.env.S3_BUCKET_NAME}.s3.amazonaws.com/uploads/${filename}`;
};
