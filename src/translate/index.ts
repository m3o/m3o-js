import * as m3o from "@m3o/m3o-node";

export class TranslateService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Basic text translation
  text(request: TextRequest): Promise<TextResponse> {
    return this.client.call(
      "translate",
      "Text",
      request
    ) as Promise<TextResponse>;
  }
}

export interface TextRequest {
  // The contents to be translated
  content?: string;
  // The string format, `text` or `html`
  format?: string;
  // The model to use for translation, `nmt` or `base`,
  // See https://cloud.google.com/translate/docs/advanced/translating-text-v3#comparing-models for more information
  model?: string;
  // Source language, format in ISO-639-1 codes
  // See https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes for more information
  source?: string;
  // Target language, format in ISO-639-1 codes
  // See https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes for more information
  target?: string;
}

export interface TextResponse {
  // The translated text
  translation?: Translation;
}

export interface Translation {
  // The source of the query string
  source?: string;
  // The translation result
  text?: string;
  // The model used in translation
  model?: string;
}
