import * as m3o from "@m3o/m3o-node";

export class UrlService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Create a URL
  create(request: CreateRequest): Promise<CreateResponse> {
    return this.client.call(
      "url",
      "Create",
      request
    ) as Promise<CreateResponse>;
  }
  // Delete a URL
  delete(request: DeleteRequest): Promise<DeleteResponse> {
    return this.client.call(
      "url",
      "Delete",
      request
    ) as Promise<DeleteResponse>;
  }
  // List all the shortened URLs
  list(request: ListRequest): Promise<ListResponse> {
    return this.client.call("url", "List", request) as Promise<ListResponse>;
  }
  // Resolve returns the destination URL of a short URL.
  resolve(request: ResolveRequest): Promise<ResolveResponse> {
    return this.client.call(
      "url",
      "Resolve",
      request
    ) as Promise<ResolveResponse>;
  }
  // Shorten a URL
  shorten(request: ShortenRequest): Promise<ShortenResponse> {
    return this.client.call(
      "url",
      "Shorten",
      request
    ) as Promise<ShortenResponse>;
  }
  // Update the destination for a short URL
  update(request: UpdateRequest): Promise<UpdateResponse> {
    return this.client.call(
      "url",
      "Update",
      request
    ) as Promise<UpdateResponse>;
  }
}

export interface CreateRequest {
  // destination url
  destinationURL?: string;
  // a unique id e.g uuid or my-url
  id?: string;
}

export interface CreateResponse {
  url?: URLPair;
}

export interface DeleteRequest {
  shortURL?: string;
}

export interface DeleteResponse {}

export interface ListRequest {
  // filter by short URL, optional
  shortURL?: string;
}

export interface ListResponse {
  urlPairs?: URLPair;
}

export interface ResolveRequest {
  // short url ID, without the domain, eg. if your short URL is
  // `m3o.one/u/someshorturlid` then pass in `someshorturlid`
  shortURL?: string;
}

export interface ResolveResponse {
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
  // time of creation
  created?: string;
  // destination url
  destinationURL?: string;
  // The number of times the short URL has been resolved
  hitCount?: number;
  // url id
  id?: string;
  // shortened url
  shortURL?: string;
}

export interface UpdateRequest {
  // the destination to update to
  destinationURL?: string;
  // the short url to update
  shortURL?: string;
}

export interface UpdateResponse {}
