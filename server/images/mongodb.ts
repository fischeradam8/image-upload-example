import { connect } from "mongoose";
import * as dotenv from "dotenv";
import ImageModel from "./model.js";
import { Request } from "express";

dotenv.config();
const url = process.env.MONGO_CONNECTION_URL ?? "";

export const findImages = () => {
  return connect(url).then(() => {
    return ImageModel.find().sort("-uploadedAt").exec();
  });
};

export const saveImage = (request: Request) => {
  return connect(url).then(() => {
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
    return document.save();
  });
};
