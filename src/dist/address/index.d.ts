export declare class AddressService {
  private client;
  constructor(token: string);
  lookupPostcode(
    request: LookupPostcodeRequest
  ): Promise<LookupPostcodeResponse>;
}
export interface LookupPostcodeRequest {
  postcode?: string;
}
export interface LookupPostcodeResponse {
  addresses?: Record[];
}
export interface Record {
  buildingName?: string;
  county?: string;
  lineOne?: string;
  lineTwo?: string;
  locality?: string;
  organisation?: string;
  postcode?: string;
  premise?: string;
  street?: string;
  summary?: string;
  town?: string;
}
