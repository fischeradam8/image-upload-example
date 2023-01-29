import { Request } from "express";
import { findImages, saveImage } from "./mongodb.js";
import ImageInterface from "./interface";
import { MongoDBConnectionError } from "../errors/MongoDBConnectionError.js";

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
  return saveImage(request);
};
