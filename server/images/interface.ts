interface ImageInterface {
  src: string;
  name: string;
  fileSize: number;
  uploadedAt: string;
  mimeType: string;
  height: number;
  width: number;
  description?: string;
}

export default ImageInterface;
