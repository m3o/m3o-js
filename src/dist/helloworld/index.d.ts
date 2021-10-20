export declare class HelloworldService {
  private client;
  constructor(token: string);
  call(request: CallRequest): Promise<CallResponse>;
  stream(request: StreamRequest): Promise<StreamResponse>;
}
export interface CallRequest {
  name?: string;
}
export interface CallResponse {
  message?: string;
}
export interface StreamRequest {
  messages?: number;
  name?: string;
}
export interface StreamResponse {
  message?: string;
}
