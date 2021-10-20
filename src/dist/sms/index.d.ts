export declare class SmsService {
  private client;
  constructor(token: string);
  send(request: SendRequest): Promise<SendResponse>;
}
export interface SendRequest {
  from?: string;
  message?: string;
  to?: string;
}
export interface SendResponse {
  info?: string;
  status?: string;
}
