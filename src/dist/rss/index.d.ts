export declare class RssService {
  private client;
  constructor(token: string);
  add(request: AddRequest): Promise<AddResponse>;
  feed(request: FeedRequest): Promise<FeedResponse>;
  list(request: ListRequest): Promise<ListResponse>;
  remove(request: RemoveRequest): Promise<RemoveResponse>;
}
export interface AddRequest {
  category?: string;
  name?: string;
  url?: string;
}
export interface AddResponse {}
export interface Entry {
  content?: string;
  date?: string;
  feed?: string;
  id?: string;
  link?: string;
  summary?: string;
  title?: string;
}
export interface Feed {
  category?: string;
  id?: string;
  name?: string;
  url?: string;
}
export interface FeedRequest {
  limit?: number;
  name?: string;
  offset?: number;
}
export interface FeedResponse {
  entries?: Entry[];
}
export interface ListRequest {}
export interface ListResponse {
  feeds?: Feed[];
}
export interface RemoveRequest {
  name?: string;
}
export interface RemoveResponse {}
