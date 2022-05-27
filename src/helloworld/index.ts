import * as m3o from "@m3o/m3o-node";

export class HelloworldService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Return a personalised Hello message
  call(request: CallRequest): Promise<CallResponse> {
    return this.client.call(
      "helloworld",
      "Call",
      request
    ) as Promise<CallResponse>;
  }
  // Stream a personalised Hello message
  stream(
    request: StreamRequest
  ): Promise<m3o.Stream<StreamRequest, StreamResponse>> {
    return this.client.stream("helloworld", "Stream", request);
  }
}

export interface CallRequest {
  // name to append to the message e.g Alice
  name?: string;
}

export interface CallResponse {
  // message including name e.g Hello Alice
  message?: string;
}

export interface StreamRequest {
  // the number of messages to send back
  messages?: number;
  // name to append to the message e.g Alice
  name?: string;
}

export interface StreamResponse {
  // message including name e.g Hello Alice
  message?: string;
}
