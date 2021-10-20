export declare class ImageService {
  private client;
  constructor(token: string);
  convert(request: ConvertRequest): Promise<ConvertResponse>;
  resize(request: ResizeRequest): Promise<ResizeResponse>;
  upload(request: UploadRequest): Promise<UploadResponse>;
}
export interface ConvertRequest {
  base64?: string;
  name?: string;
  outputURL?: boolean;
  url?: string;
}
export interface ConvertResponse {
  base64?: string;
  url?: string;
}
export interface CropOptions {
  anchor?: string;
  height?: number;
  width?: number;
}
export interface Point {
  x?: number;
  y?: number;
}
export interface Rectangle {
  max?: Point;
  min?: Point;
}
export interface ResizeRequest {
  base64?: string;
  cropOptions?: CropOptions;
  height?: number;
  name?: string;
  outputURL?: boolean;
  url?: string;
  width?: number;
}
export interface ResizeResponse {
  base64?: string;
  url?: string;
}
export interface UploadRequest {
  base64?: string;
  name?: string;
  url?: string;
}
export interface UploadResponse {
  url?: string;
}
