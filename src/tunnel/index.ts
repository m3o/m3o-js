import * as m3o from "@m3o/m3o-node";

export class TunnelService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Send a request through the tunnel
  send(request: SendRequest): Promise<SendResponse> {
    return this.client.call("tunnel", "Send", request) as Promise<SendResponse>;
  }
}

export interface SendRequest {
  // headers to include e.g Content-Type: application/json
  headers?: { [key: string]: string };
  // host to send to e.g www.google.com
  host?: string;
  // method of the request e.g GET, POST, DELETE
  method?: string;
  // request params to include
  params?: { [key: string]: string };
  // path to request e.g /news
  path?: string;
  // alternatively specify a full url e.g https://www.google.com/news
  url?: string;
  // body of the request
  body?: string;
}

export interface SendResponse {
  // body of the response
  body?: string;
  // headers included
  headers?: { [key: string]: string };
  // the status
  status?: string;
  // the status code
  status_code?: number;
}
