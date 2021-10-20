export declare class IpService {
  private client;
  constructor(token: string);
  lookup(request: LookupRequest): Promise<LookupResponse>;
}
export interface LookupRequest {
  ip?: string;
}
export interface LookupResponse {
  asn?: number;
  city?: string;
  continent?: string;
  country?: string;
  ip?: string;
  latitude?: number;
  longitude?: number;
  timezone?: string;
}
