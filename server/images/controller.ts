import ImageModel from "./model.js";
import { connect } from "mongoose";
import { Request } from "express";

export const listImages = () => {
  return connect("mongodb://127.0.0.1:27017/images-test").then(() => {
    return ImageModel.find().sort("-uploadedAt").exec();
  });
};

export const createImage = (request: Request) => {
  return connect("mongodb://127.0.0.1:27017/images-test").then(() => {
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
