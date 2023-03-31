import * as m3o from "@m3o/m3o-node";

export class AiService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Make a request to the AI
  complete(request: CompleteRequest): Promise<CompleteResponse> {
    return this.client.call(
      "ai",
      "Complete",
      request
    ) as Promise<CompleteResponse>;
  }
  // Edit or edit prompt/code
  edit(request: EditRequest): Promise<EditResponse> {
    return this.client.call("ai", "Edit", request) as Promise<EditResponse>;
  }
  // Generage an image from prompt
  image(request: ImageRequest): Promise<ImageResponse> {
    return this.client.call("ai", "Image", request) as Promise<ImageResponse>;
  }
  // Moderate hate speech
  moderate(request: ModerateRequest): Promise<ModerateResponse> {
    return this.client.call(
      "ai",
      "Moderate",
      request
    ) as Promise<ModerateResponse>;
  }
}

export interface CompleteRequest {
  // input to pass in
  text?: string;
}

export interface CompleteResponse {
  // text returned
  text?: string;
}

export interface EditRequest {
  // instruction hint e.g check the grammar
  instruction?: string;
  // text/code to check
  text?: string;
}

export interface EditResponse {
  // response output
  text?: string;
}

export interface Image {
  // base64 encoded
  base64?: string;
  // image url
  url?: string;
}

export interface ImageRequest {
  // number of images to generate (max 10)
  limit?: number;
  // size of image 256x256, 512x512, 1024x1024
  size?: string;
  // text description of image
  text?: string;
}

export interface ImageResponse {
  // image urls
  images?: Image[];
}

export interface ModerateRequest {
  // text to check
  text?: string;
}

export interface ModerateResponse {
  // categories tested and identified
  categories?: { [key: string]: boolean };
  // whether it was flagged or not
  flagged?: boolean;
  // related scores
  scores?: { [key: string]: number };
}
