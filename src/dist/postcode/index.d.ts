export declare class PostcodeService {
  private client;
  constructor(token: string);
  lookup(request: LookupRequest): Promise<LookupResponse>;
  random(request: RandomRequest): Promise<RandomResponse>;
  validate(request: ValidateRequest): Promise<ValidateResponse>;
}
export interface LookupRequest {
  postcode?: string;
}
export interface LookupResponse {
  country?: string;
  district?: string;
  latitude?: number;
  longitude?: number;
  postcode?: string;
  region?: string;
  ward?: string;
}
export interface RandomRequest {}
export interface RandomResponse {
  country?: string;
  district?: string;
  latitude?: number;
  longitude?: number;
  postcode?: string;
  region?: string;
  ward?: string;
}
export interface ValidateRequest {
  postcode?: string;
}
export interface ValidateResponse {
  valid?: boolean;
}
