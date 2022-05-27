import * as m3o from "@m3o/m3o-node";

export class UrlService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // List all the shortened URLs
  list(request: ListRequest): Promise<ListResponse> {
    return this.client.call("url", "List", request) as Promise<ListResponse>;
  }
  // Proxy returns the destination URL of a short URL.
  proxy(request: ProxyRequest): Promise<ProxyResponse> {
    return this.client.call("url", "Proxy", request) as Promise<ProxyResponse>;
  }
  // Shorten a long URL
  shorten(request: ShortenRequest): Promise<ShortenResponse> {
    return this.client.call(
      "url",
      "Shorten",
      request
    ) as Promise<ShortenResponse>;
  }
}

export interface ListRequest {
  // filter by short URL, optional
  shortURL?: string;
}

export interface ListResponse {
  urlPairs?: URLPair;
}

export interface ProxyRequest {
  // short url ID, without the domain, eg. if your short URL is
  // `m3o.one/u/someshorturlid` then pass in `someshorturlid`
  shortURL?: string;
}

export interface ProxyResponse {
  destinationURL?: string;
}

export interface ShortenRequest {
  // the url to shorten
  destinationURL?: string;
}

export interface ShortenResponse {
  // the shortened url
  shortURL?: string;
}

export interface URLPair {
  // shortened url
  shortURL?: string;
  // time of creation
  created?: string;
  // destination url
  destinationURL?: string;
  // The number of times the short URL has been resolved
  hitCount?: number;
}
