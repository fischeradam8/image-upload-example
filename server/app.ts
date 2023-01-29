import express, { Express, Request, Response } from "express";
import cors from "cors";
import multer from "multer";
import bodyParser from "body-parser";
import { createImage, listImages } from "./images/controller.js";

const app: Express = express();
const port = "3001";
const upload = multer();

app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));

//LIST
app.get("/images", (request: Request, response: Response) => {
  listImages().then((data) => response.send(data));
});

app.post(
  "/images",
  upload.single("file"),
  (request: Request, response: Response) => {
    createImage(request).then(() => response.send());
  }
);

app.listen(port, () => {
  console.log(`Listening on Port 3001`);
});
