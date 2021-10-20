export declare class TimeService {
  private client;
  constructor(token: string);
  now(request: NowRequest): Promise<NowResponse>;
  zone(request: ZoneRequest): Promise<ZoneResponse>;
}
export interface NowRequest {
  location?: string;
}
export interface NowResponse {
  localtime?: string;
  location?: string;
  timestamp?: string;
  timezone?: string;
  unix?: number;
}
export interface ZoneRequest {
  location?: string;
}
export interface ZoneResponse {
  abbreviation?: string;
  country?: string;
  dst?: boolean;
  latitude?: number;
  localtime?: string;
  location?: string;
  longitude?: number;
  region?: string;
  timezone?: string;
}
