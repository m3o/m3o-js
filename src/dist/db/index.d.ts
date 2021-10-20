export declare class DbService {
  private client;
  constructor(token: string);
  create(request: CreateRequest): Promise<CreateResponse>;
  delete(request: DeleteRequest): Promise<DeleteResponse>;
  read(request: ReadRequest): Promise<ReadResponse>;
  truncate(request: TruncateRequest): Promise<TruncateResponse>;
  update(request: UpdateRequest): Promise<UpdateResponse>;
}
export interface CreateRequest {
  record?: {
    [key: string]: any;
  };
  table?: string;
}
export interface CreateResponse {
  id?: string;
}
export interface DeleteRequest {
  id?: string;
  table?: string;
}
export interface DeleteResponse {}
export interface ReadRequest {
  id?: string;
  limit?: number;
  offset?: number;
  order?: string;
  orderBy?: string;
  query?: string;
  table?: string;
}
export interface ReadResponse {
  records?: {
    [key: string]: any;
  };
}
export interface TruncateRequest {
  table?: string;
}
export interface TruncateResponse {
  table?: string;
}
export interface UpdateRequest {
  id?: string;
  record?: {
    [key: string]: any;
  };
  table?: string;
}
export interface UpdateResponse {}
