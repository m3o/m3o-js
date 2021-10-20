export declare class LocationService {
  private client;
  constructor(token: string);
  read(request: ReadRequest): Promise<ReadResponse>;
  save(request: SaveRequest): Promise<SaveResponse>;
  search(request: SearchRequest): Promise<SearchResponse>;
}
export interface Entity {
  id?: string;
  location?: Point;
  type?: string;
}
export interface Point {
  latitude?: number;
  longitude?: number;
  timestamp?: number;
}
export interface ReadRequest {
  id?: string;
}
export interface ReadResponse {
  entity?: {
    [key: string]: any;
  };
}
export interface SaveRequest {
  entity?: {
    [key: string]: any;
  };
}
export interface SaveResponse {}
export interface SearchRequest {
  center?: Point;
  numEntities?: number;
  radius?: number;
  type?: string;
}
export interface SearchResponse {
  entities?: Entity[];
}
