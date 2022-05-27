import * as m3o from "@m3o/m3o-node";

export class MemegenService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Generate a meme using a template
  generate(request: GenerateRequest): Promise<GenerateResponse> {
    return this.client.call(
      "memegen",
      "Generate",
      request
    ) as Promise<GenerateResponse>;
  }
  // List the available templates
  templates(request: TemplatesRequest): Promise<TemplatesResponse> {
    return this.client.call(
      "memegen",
      "Templates",
      request
    ) as Promise<TemplatesResponse>;
  }
}

export interface Box {
  // width in pixels
  width?: number;
  // x axis position
  x?: number;
  // y axis position
  y?: number;
  // colour hex code
  color?: string;
  // height in pixels
  height?: number;
  // outline color hex code
  outline?: string;
  // text to display
  text?: string;
}

export interface GenerateRequest {
  // bottom text
  bottom_text?: string;
  // font: arial or impact
  font?: string;
  // the template id to use
  id?: string;
  // font size; defaults to 50px
  max_font_size?: string;
  // top text
  top_text?: string;
}

export interface GenerateResponse {
  // url of the memegen
  url?: string;
}

export interface Template {
  // number of boxes used
  box_count?: number;
  // height in pixels
  height?: number;
  // id of the memegen
  id?: string;
  // name of the memegen
  name?: string;
  // url of the memegen
  url?: string;
  // width in pixels
  width?: number;
}

export interface TemplatesRequest {}

export interface TemplatesResponse {
  templates?: Template[];
}
