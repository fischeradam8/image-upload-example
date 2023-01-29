import { MetaError } from "./MetaError.js";

export class FileTypeError extends MetaError {
  constructor() {
    super(400);
    this.message = "Invalid file type! Please use .jpeg or .png extensions."
  }
}