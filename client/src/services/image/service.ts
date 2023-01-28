import { restClient } from "../rest-client";

export interface ApiImage {
  id: string;
  image: string;
  name: string;
  size: string;
  width: string;
  height: string;
  uploadedAt: string;
  uploadedFrom: string;
  description?: string;
}

export const getImages = () =>
  restClient.get("/images").then((data) => data.data);

//TODO fix typings, error handling
export const uploadImage = (data: {
  file: string | null;
  description?: string;
}) => restClient.post("/images", data);
