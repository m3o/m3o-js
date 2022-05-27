import * as m3o from "@m3o/m3o-node";

export class PingService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Ping an IP address
  ip(request: IpRequest): Promise<IpResponse> {
    return this.client.call("ping", "Ip", request) as Promise<IpResponse>;
  }
  // Ping a TCP port is open
  tcp(request: TcpRequest): Promise<TcpResponse> {
    return this.client.call("ping", "Tcp", request) as Promise<TcpResponse>;
  }
  // Ping a HTTP URL
  url(request: UrlRequest): Promise<UrlResponse> {
    return this.client.call("ping", "Url", request) as Promise<UrlResponse>;
  }
}

export interface IpRequest {
  // address to ping
  address?: string;
}

export interface IpResponse {
  // average latency e.g 10ms
  latency?: string;
  // response status
  status?: string;
}

export interface TcpRequest {
  // address to dial
  address?: string;
  // optional data to send
  data?: string;
}

export interface TcpResponse {
  // response status
  status?: string;
  // response data if any
  data?: string;
}

export interface UrlRequest {
  // address to use
  address?: string;
  // method of the call
  method?: string;
}

export interface UrlResponse {
  // the response code
  code?: number;
  // the response status
  status?: string;
}
