import * as m3o from "@m3o/m3o-node";

export class AvatarService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  //
  generate(request: GenerateRequest): Promise<GenerateResponse> {
    return this.client.call(
      "avatar",
      "Generate",
      request
    ) as Promise<GenerateResponse>;
  }
}

export interface GenerateRequest {
  // encode format of avatar image, `png` or `jpeg`, default is `jpeg`
  format?: string;
  // avatar's gender, `male` or `female`, default is `male`
  gender?: string;
  // if upload to m3o CDN, default is `false`
  // if update = true, then it'll return the CDN url
  upload?: boolean;
  // avatar's username, unique username will generates the unique avatar;
  // if username == "", will generate a random avatar in every request
  // if upload == true, username will be used as CDN filename rather than a random uuid string
  username?: string;
}

export interface GenerateResponse {
  // base64encode string of the avatar image
  base64?: string;
  // Micro's CDN url of the avatar image
  url?: string;
}
