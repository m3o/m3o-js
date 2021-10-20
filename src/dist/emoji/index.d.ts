export declare class EmojiService {
  private client;
  constructor(token: string);
  find(request: FindRequest): Promise<FindResponse>;
  flag(request: FlagRequest): Promise<FlagResponse>;
  print(request: PrintRequest): Promise<PrintResponse>;
  send(request: SendRequest): Promise<SendResponse>;
}
export interface FindRequest {
  alias?: string;
}
export interface FindResponse {
  emoji?: string;
}
export interface FlagRequest {
  code?: string;
}
export interface FlagResponse {
  flag?: string;
}
export interface PrintRequest {
  text?: string;
}
export interface PrintResponse {
  text?: string;
}
export interface SendRequest {
  from?: string;
  message?: string;
  to?: string;
}
export interface SendResponse {
  success?: boolean;
}
