import express, { Express, Request, Response } from "express";
import cors from "cors";
import multer from "multer";
import bodyParser from "body-parser";
import { Schema, model, connect } from "mongoose";

const app: Express = express();
const port = "3001";
const upload = multer();

app.use(cors());
app.use(bodyParser.json());

interface ImageInterface {
  image: Buffer;
  description?: string;
}

const imageSchema = new Schema<ImageInterface>({
  image: { type: Buffer, required: true },
  description: { type: String, required: false },
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
        image: request.body.file,
        description: request.body.description,
      });
      document.save().then(() => console.log(document));
      response.send("OK");
    });
  }
);

app.listen(port, () => {
  console.log(`Listening on Port 3001`);
});
