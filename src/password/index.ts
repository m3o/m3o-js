import * as m3o from "@m3o/m3o-node";

export class PasswordService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Generate a strong random password
  generate(request: GenerateRequest): Promise<GenerateResponse> {
    return this.client.call(
      "password",
      "Generate",
      request
    ) as Promise<GenerateResponse>;
  }
}

export interface GenerateRequest {
  // password length; defaults to 16 chars
  length?: number;
}

export interface GenerateResponse {
  // The generated password
  password?: string;
}
