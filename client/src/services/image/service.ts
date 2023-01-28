import { restClient } from "../rest-client";

export interface ApiImage {
  id: string;
  src: string;
  name: string;
  size: string;
  width: string;
  height: string;
  uploadedAt: string;
  uploadedFrom: string;
  description?: string;
}

export interface FileData {
  src: string;
  data: File;
}

export const getImages = () =>
  restClient.get("/images").then((data) => data.data);

//TODO error handling
export const uploadImage = (file: FileData | null, description?: string) => {
  if (!file) {
    //TODO
    return;
  }
  return restClient.post("/images", denormalizeImage(file, description));
};

const denormalizeImage = (file: FileData, description?: string) => {
  return {
    src: file.src,
    // name: file.data.name,
    uploadedAt: Date.now(),
    description: description,
  };
};
