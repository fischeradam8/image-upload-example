import express, { Express, Request, Response } from "express";
import cors from "cors";
import multer from "multer";
import bodyParser from "body-parser";
import { Schema, model, connect } from "mongoose";

const app: Express = express();
const port = "3001";
const upload = multer();

app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));

interface ImageInterface {
  src: string;
  name: string;
  fileSize: number;
  uploadedAt: string;
  mimeType: string;
  height: number;
  width: number;
  description?: string;
}

const imageSchema = new Schema<ImageInterface>({
  src: { type: String, required: true },
  name: { type: String, required: true },
  fileSize: { type: Number, required: true },
  mimeType: { type: String, required: true },
  height: { type: Number, required: true },
  width: { type: Number, required: true },
  description: { type: String, required: false },
  uploadedAt: { type: String, required: true },
});

const ImageModel = model<ImageInterface>("Image", imageSchema);

//LIST
app.get("/images", (request: Request, response: Response) => {
  connect("mongodb://127.0.0.1:27017/images-test").then(() => {
    ImageModel.find().then((data) => response.send(data));
  });
});

app.post(
  "/images",
  upload.single("file"),
  (request: Request, response: Response) => {
    connect("mongodb://127.0.0.1:27017/images-test").then(() => {
      const document = new ImageModel({
        src: request.body.src,
        name: request.body.name,
        fileSize: request.body.fileSize,
        uploadedAt: request.body.uploadedAt,
        mimeType: request.body.mimeType,
        height: request.body.height,
        width: request.body.width,
        description: request.body.description,
      });
      document.save().then(() => response.send());
    });
  }
);

app.listen(port, () => {
  console.log(`Listening on Port 3001`);
});
