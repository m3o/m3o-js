export declare class StreamService {
  private client;
  constructor(token: string);
  publish(request: PublishRequest): Promise<PublishResponse>;
  subscribe(request: SubscribeRequest): Promise<SubscribeResponse>;
}
export interface PublishRequest {
  message?: {
    [key: string]: any;
  };
  topic?: string;
}
export interface PublishResponse {}
export interface SubscribeRequest {
  topic?: string;
}
export interface SubscribeResponse {
  message?: {
    [key: string]: any;
  };
  topic?: string;
}
