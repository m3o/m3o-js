import * as m3o from "@m3o/m3o-node";

export class PasswordService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Generate a strong random password. Use the switches to control which character types are included, defaults to using all of them
  generate(request: GenerateRequest): Promise<GenerateResponse> {
    return this.client.call(
      "password",
      "Generate",
      request
    ) as Promise<GenerateResponse>;
  }
}

export interface GenerateRequest {
  // password length; defaults to 8 chars
  length?: number;
  // include lowercase letters
  lowercase?: boolean;
  // include numbers
  numbers?: boolean;
  // include special characters (!@#$%&*)
  special?: boolean;
  // include uppercase letters
  uppercase?: boolean;
}

export interface GenerateResponse {
  // The generated password
  password?: string;
}
