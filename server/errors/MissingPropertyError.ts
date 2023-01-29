import { MetaError } from "./MetaError.js";

export class MissingPropertyError extends MetaError {
  constructor() {
    super(400);
    //TODO tell which property is missing
    this.message =
      "Please send all necessary properties! (src, name, width, height, fileSize, uploadedAt, mimeType)";
  }
}
