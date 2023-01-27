import { restClient } from "../rest-client";

export interface Image {
  id: string;
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
