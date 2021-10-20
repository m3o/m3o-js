export declare class GeocodingService {
  private client;
  constructor(token: string);
  lookup(request: LookupRequest): Promise<LookupResponse>;
  reverse(request: ReverseRequest): Promise<ReverseResponse>;
}
export interface Address {
  city?: string;
  country?: string;
  lineOne?: string;
  lineTwo?: string;
  postcode?: string;
}
export interface Location {
  latitude?: number;
  longitude?: number;
}
export interface LookupRequest {
  address?: string;
  city?: string;
  country?: string;
  postcode?: string;
}
export interface LookupResponse {
  address?: {
    [key: string]: any;
  };
  location?: {
    [key: string]: any;
  };
}
export interface ReverseRequest {
  latitude?: number;
  longitude?: number;
}
export interface ReverseResponse {
  address?: {
    [key: string]: any;
  };
  location?: {
    [key: string]: any;
  };
}
