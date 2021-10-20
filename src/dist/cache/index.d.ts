export declare class CacheService {
  private client;
  constructor(token: string);
  decrement(request: DecrementRequest): Promise<DecrementResponse>;
  delete(request: DeleteRequest): Promise<DeleteResponse>;
  get(request: GetRequest): Promise<GetResponse>;
  increment(request: IncrementRequest): Promise<IncrementResponse>;
  set(request: SetRequest): Promise<SetResponse>;
}
export interface DecrementRequest {
  key?: string;
  value?: number;
}
export interface DecrementResponse {
  key?: string;
  value?: number;
}
export interface DeleteRequest {
  key?: string;
}
export interface DeleteResponse {
  status?: string;
}
export interface GetRequest {
  key?: string;
}
export interface GetResponse {
  key?: string;
  ttl?: number;
  value?: string;
}
export interface IncrementRequest {
  key?: string;
  value?: number;
}
export interface IncrementResponse {
  key?: string;
  value?: number;
}
export interface SetRequest {
  key?: string;
  ttl?: number;
  value?: string;
}
export interface SetResponse {
  status?: string;
}
