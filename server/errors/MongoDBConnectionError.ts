import { MongoDBError } from "./MongoDBError.js";

export class MongoDBConnectionError extends MongoDBError {
  constructor() {
    super(500);
  }
}
