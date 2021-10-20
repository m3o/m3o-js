export declare class IdService {
  private client;
  constructor(token: string);
  generate(request: GenerateRequest): Promise<GenerateResponse>;
  types(request: TypesRequest): Promise<TypesResponse>;
}
export interface GenerateRequest {
  type?: string;
}
export interface GenerateResponse {
  id?: string;
  type?: string;
}
export interface TypesRequest {}
export interface TypesResponse {
  types?: string[];
}
