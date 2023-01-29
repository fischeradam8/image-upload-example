import { Request } from "express";
import { findImages, saveImage } from "./mongodb.js";
import ImageInterface from "./interface";

export const listImages = () => {
  return findImages();
};

export const createImage = (request: Request): Promise<ImageInterface> => {
  return saveImage(request);
};
