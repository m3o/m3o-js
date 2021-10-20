export declare class OtpService {
  private client;
  constructor(token: string);
  generate(request: GenerateRequest): Promise<GenerateResponse>;
  validate(request: ValidateRequest): Promise<ValidateResponse>;
}
export interface GenerateRequest {
  expiry?: number;
  id?: string;
  size?: number;
}
export interface GenerateResponse {
  code?: string;
}
export interface ValidateRequest {
  code?: string;
  id?: string;
}
export interface ValidateResponse {
  success?: boolean;
}
