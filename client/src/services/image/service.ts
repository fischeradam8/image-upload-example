import { restClient } from "../rest-client";

export interface ApiImage {
  id: string;
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

const denormalizeImage = (fileData: FileData, description?: string) => {
  return {
    src: fileData.src,
    name: fileData.file.name,
    fileSize: fileData.file.size,
    mimeType: fileData.file.type,
    uploadedAt: Date.now(),
    description: description,
  };
};
