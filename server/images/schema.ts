import { Schema } from "mongoose";
import ImageInterface from "./interface.js";

const imageSchema = new Schema<ImageInterface>({
  src: { type: String, required: true },
  name: { type: String, required: true },
  fileSize: { type: Number, required: true },
  mimeType: { type: String, required: true },
  height: { type: Number, required: true },
  width: { type: Number, required: true },
  description: { type: String, required: false },
  uploadedAt: { type: String, required: true },
});

export default imageSchema;
