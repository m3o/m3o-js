export declare class FileService {
  private client;
  constructor(token: string);
  delete(request: DeleteRequest): Promise<DeleteResponse>;
  list(request: ListRequest): Promise<ListResponse>;
  read(request: ReadRequest): Promise<ReadResponse>;
  save(request: SaveRequest): Promise<SaveResponse>;
}
export interface BatchSaveRequest {
  files?: Record[];
}
export interface BatchSaveResponse {}
export interface DeleteRequest {
  path?: string;
  project?: string;
}
export interface DeleteResponse {}
export interface ListRequest {
  path?: string;
  project?: string;
}
export interface ListResponse {
  files?: Record[];
}
export interface ReadRequest {
  path?: string;
  project?: string;
}
export interface ReadResponse {
  file?: Record;
}
export interface Record {
  content?: string;
  created?: string;
  metadata?: {
    [key: string]: string;
  };
  path?: string;
  project?: string;
  updated?: string;
}
export interface SaveRequest {
  file?: Record;
}
export interface SaveResponse {}
