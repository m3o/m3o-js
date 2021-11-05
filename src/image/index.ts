import * as m3o from "@m3o/m3o-node";

export class ImageService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Convert an image from one format (jpeg, png etc.) to an other either on the fly (from base64 to base64),
  // or by uploading the conversion result.
  convert(request: ConvertRequest): Promise<ConvertResponse> {}
  // Delete an image previously uploaded.
  delete(request: DeleteRequest): Promise<DeleteResponse> {}
  // Resize an image on the fly without storing it (by sending and receiving a base64 encoded image), or resize and upload depending on parameters.
  // If one of width or height is 0, the image aspect ratio is preserved.
  // Optional cropping.
  resize(request: ResizeRequest): Promise<ResizeResponse> {}
  // Upload an image by either sending a base64 encoded image to this endpoint or a URL.
  // To resize an image before uploading, see the Resize endpoint.
  upload(request: UploadRequest): Promise<UploadResponse> {}
}

export interface ConvertRequest {
  // base64 encoded image to resize,
  base64?: string;
  // output name of the image including extension, ie. "cat.png"
  name?: string;
  // make output a URL and not a base64 response
  outputURL?: boolean;
  // url of the image to resize
  url?: string;
}

export interface ConvertResponse {
  base64?: string;
  url?: string;
}

export interface CropOptions {
  // Crop anchor point: "top", "top left", "top right",
  // "left", "center", "right"
  // "bottom left", "bottom", "bottom right".
  // Optional. Defaults to center.
  anchor?: string;
  // height to crop to
  height?: number;
  // width to crop to
  width?: number;
}

export interface DeleteRequest {
  // url of the image to delete e.g. https://cdn.m3ocontent.com/micro/images/micro/41e23b39-48dd-42b6-9738-79a313414bb8/cat.jpeg
  url?: string;
}

export interface DeleteResponse {}

export interface Point {
  x?: number;
  y?: number;
}

export interface Rectangle {
  max?: Point;
  min?: Point;
}

export interface ResizeRequest {
  // base64 encoded image to resize,
  base64?: string;
  // optional crop options
  // if provided, after resize, the image
  // will be cropped
  cropOptions?: CropOptions;
  height?: number;
  // output name of the image including extension, ie. "cat.png"
  name?: string;
  // make output a URL and not a base64 response
  outputURL?: boolean;
  // url of the image to resize
  url?: string;
  width?: number;
}

export interface ResizeResponse {
  base64?: string;
  url?: string;
}

export interface UploadRequest {
  // Base64 encoded image to upload,
  base64?: string;
  // Output name of the image including extension, ie. "cat.png"
  name?: string;
  // URL of the image to upload
  url?: string;
}

export interface UploadResponse {
  url?: string;
}
