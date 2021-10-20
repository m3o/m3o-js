export declare class EmailService {
  private client;
  constructor(token: string);
  send(request: SendRequest): Promise<SendResponse>;
}
export interface SendRequest {
  from?: string;
  htmlBody?: string;
  replyTo?: string;
  subject?: string;
  textBody?: string;
  to?: string;
}
export interface SendResponse {}
