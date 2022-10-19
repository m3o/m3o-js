import * as m3o from "@m3o/m3o-node";

export class AiService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Make a request to the AI
  call(request: CallRequest): Promise<CallResponse> {
    return this.client.call("ai", "Call", request) as Promise<CallResponse>;
  }
  // Check or edit text/code
  check(request: CheckRequest): Promise<CheckResponse> {
    return this.client.call("ai", "Check", request) as Promise<CheckResponse>;
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

export interface CallRequest {
  // text to pass in
  text?: string;
}

export interface CallResponse {
  // text returned
  text?: string;
}

export interface CheckRequest {
  // instruction hint e.g check the grammar
  instruction?: string;
  // text/code to check
  text?: string;
}

export interface CheckResponse {
  // response output
  text?: string;
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
