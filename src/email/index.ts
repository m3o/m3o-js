import * as m3o from "@m3o/m3o-node";

export class EmailService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Parse an RFC5322 address e.g "Joe Blogs <joe@example.com>"
  parse(request: ParseRequest): Promise<ParseResponse> {
    return this.client.call(
      "email",
      "Parse",
      request
    ) as Promise<ParseResponse>;
  }
  // Send an email by passing in from, to, subject, and a text or html body
  send(request: SendRequest): Promise<SendResponse> {
    return this.client.call("email", "Send", request) as Promise<SendResponse>;
  }
  // Validate an email address format
  validate(request: ValidateRequest): Promise<ValidateResponse> {
    return this.client.call(
      "email",
      "Validate",
      request
    ) as Promise<ValidateResponse>;
  }
}

export interface ParseRequest {
  // The address to parse. Can be of the format "Joe Blogs <joe@example.com>" or "joe@example.com"
  address?: string;
}

export interface ParseResponse {
  // the email address
  address?: string;
  // associated name e.g Joe Blogs
  name?: string;
}

export interface SendRequest {
  // the display name of the sender
  from?: string;
  // the html body
  html_body?: string;
  // an optional reply to email address
  reply_to?: string;
  // the email subject
  subject?: string;
  // the text body
  text_body?: string;
  // the email address of the recipient
  to?: string;
}

export interface SendResponse {}

export interface ValidateRequest {
  address?: string;
}

export interface ValidateResponse {
  is_valid?: boolean;
}
