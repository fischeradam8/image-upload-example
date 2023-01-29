import express, { Express, Request, Response } from "express";
import cors from "cors";
import multer from "multer";
import bodyParser from "body-parser";
import { createImage, listImages } from "./images/controller.js";
import { MongoDBError } from "./errors/MongoDBError.js";

const app: Express = express();
const port = "3001"; //TODO
const upload = multer();

app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));

//LIST
app.get("/images", (request: Request, response: Response) => {
  listImages().then(
    (data) => response.send(data),
    //TODO add higher level abstraction
    (e: MongoDBError) => {
      response.sendStatus(e.getCode());
    }
  );
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
