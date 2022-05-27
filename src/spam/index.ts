import * as m3o from "@m3o/m3o-node";

export class SpamService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Check whether an email is likely to be spam based on its attributes
  classify(request: ClassifyRequest): Promise<ClassifyResponse> {
    return this.client.call(
      "spam",
      "Classify",
      request
    ) as Promise<ClassifyResponse>;
  }
}

export interface ClassifyRequest {
  // the HTML version of the email body
  html_body?: string;
  // The subject of the email
  subject?: string;
  // the plain text version of the email body
  text_body?: string;
  // The email address it is being sent to
  to?: string;
  // The raw body of the email including headers etc per RFC 822. Alternatively, use the other parameters to correctly format the message
  email_body?: string;
  // The email address it has been sent from
  from?: string;
}

export interface ClassifyResponse {
  // The rules that have contributed to this score
  details?: string[];
  // Is it spam? Returns true if its score is > 5
  is_spam?: boolean;
  // The score evaluated for this email. A higher number means it is more likely to be spam
  score?: number;
}
