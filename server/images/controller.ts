import { Request } from "express";
import { findImages, saveImage } from "./mongodb.js";
import ImageInterface from "./interface";
import { MongoDBConnectionError } from "../errors/MongoDBConnectionError.js";
import { FileTypeError } from "../errors/FileTypeError.js";
import { MissingPropertyError } from "../errors/MissingPropertyError.js";

export const listImages = () => {
  return findImages().then(
    (data) => {
      return data;
    },
    (error) => {
      throw new MongoDBConnectionError();
    }
  );
};

export const createImage = (request: Request): Promise<ImageInterface> => {
  return validateCreateImageRequest(request).then(() => saveImage(request));
};

const validateCreateImageRequest = (request: Request): Promise<any> => {
  return new Promise<any>((resolve, reject) => {
    if (!["image/jpeg", "image/png"].includes(request.body.mimeType)) {
      reject(new FileTypeError());
    }
    if (
      !request.body.mimeType ||
      !request.body.src ||
      !request.body.name ||
      !request.body.fileSize ||
      !request.body.uploadedAt ||
      !request.body.height ||
      !request.body.width
    ) {
      reject(new MissingPropertyError());
    }
    resolve("");
  });
};
