import { model } from "mongoose";
import ImageInterface from "./interface.js";
import imageSchema from "./schema.js";

const ImageModel = model<ImageInterface>("Image", imageSchema);

export default ImageModel;
