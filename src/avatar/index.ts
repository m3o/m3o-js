import * as m3o from "@m3o/m3o-node";

export class AvatarService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Generate an unique avatar
  generate(request: GenerateRequest): Promise<GenerateResponse> {
    return this.client.call(
      "avatar",
      "Generate",
      request
    ) as Promise<GenerateResponse>;
  }
}

export interface GenerateRequest {
  // encode format of avatar image: `png` or `jpeg`; default is `jpeg`
  format?: string;
  // avatar's gender: `male` or `female`; default is `male`
  gender?: string;
  // set to true to upload to the M3O CDN and receive the url
  upload?: boolean;
  // avatar's username, unique username will generate the unique avatar;
  // if empty, every request generates a random avatar;
  // if upload == true, username will be the CDN filename rather than a random uuid string
  username?: string;
}

export interface GenerateResponse {
  // base64 encoded string of the avatar image
  base64?: string;
  // M3O's CDN url of the avatar image
  url?: string;
}
