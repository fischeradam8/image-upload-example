import { AxiosResponse } from "axios";
import { restClient } from "../rest-client";
import moment from "moment";

export interface ApiImage {
  id: string;
  _id: string;
  src: string;
  name: string;
  fileSize: string;
  width: string;
  height: string;
  uploadedAt: string;
  uploadedFrom: string;
  description?: string;
}

export interface FileData {
  src: string;
  file: File;
  size: {
    width: number;
    height: number;
  };
}

export const getImages = () =>
  restClient.get("/images").then(
    (data: AxiosResponse<ApiImage[]>) =>
      data.data.map((datum) => ({ ...datum, id: datum["_id"] })),
    () => []
  );

//TODO error handling
export const uploadImage = (file: FileData | null, description?: string) => {
  if (!file) {
    //TODO
    return;
  }
  return restClient.post("/images", denormalizeImage(file, description));
};

const denormalizeImage = (fileData: FileData, description?: string) => {
  return {
    src: fileData.src,
    name: fileData.file.name,
    fileSize: fileData.file.size,
    mimeType: fileData.file.type,
    uploadedAt: moment.utc().toJSON(),
    width: fileData.size.width,
    height: fileData.size.height,
    description: description,
  };
};
