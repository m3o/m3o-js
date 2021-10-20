export declare class UrlService {
  private client;
  constructor(token: string);
  list(request: ListRequest): Promise<ListResponse>;
  proxy(request: ProxyRequest): Promise<ProxyResponse>;
  shorten(request: ShortenRequest): Promise<ShortenResponse>;
}
export interface ListRequest {
  shortURL?: string;
}
export interface ListResponse {
  urlPairs?: URLPair;
}
export interface ProxyRequest {
  shortURL?: string;
}
export interface ProxyResponse {
  destinationURL?: string;
}
export interface ShortenRequest {
  destinationURL?: string;
}
export interface ShortenResponse {
  shortURL?: string;
}
export interface URLPair {
  created?: number;
  destinationURL?: string;
  hitCount?: number;
  owner?: string;
  shortURL?: string;
}
