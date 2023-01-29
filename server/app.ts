import express, { Express, Request, Response } from "express";
import cors from "cors";
import multer from "multer";
import bodyParser from "body-parser";
import { createImage, listImages } from "./images/controller.js";
import { MetaError } from "./errors/MetaError.js";

const app: Express = express();
const port = "3001"; //TODO use env
const upload = multer();

app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));

//LIST
app.get("/images", (request: Request, response: Response) => {
  listImages().then(
    (data) => response.send(data),
    (e: MetaError) => {
      response.sendStatus(e.getCode());
    }
  );
});

app.post(
  "/images",
  upload.single("file"),
  (request: Request, response: Response) => {
    createImage(request).then(
      () => response.sendStatus(201),
      (error: MetaError) => {
        if (error.getCode() === 500) {
          response.sendStatus(500);
        }
        if (error.getCode() === 400) {
          response.status(400);
          response.send(error.message);
        }
      }
    );
  }
);

app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});
