export declare class ThumbnailService {
  private client;
  constructor(token: string);
  screenshot(request: ScreenshotRequest): Promise<ScreenshotResponse>;
}
export interface ScreenshotRequest {
  height?: number;
  url?: string;
  width?: number;
}
export interface ScreenshotResponse {
  imageURL?: string;
}
