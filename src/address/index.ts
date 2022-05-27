import * as m3o from "@m3o/m3o-node";

export class AddressService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Lookup a list of UK addresses by postcode
  lookupPostcode(
    request: LookupPostcodeRequest
  ): Promise<LookupPostcodeResponse> {
    return this.client.call(
      "address",
      "LookupPostcode",
      request
    ) as Promise<LookupPostcodeResponse>;
  }
}

export interface LookupPostcodeRequest {
  // UK postcode e.g SW1A 2AA
  postcode?: string;
}

export interface LookupPostcodeResponse {
  addresses?: Record[];
}

export interface Record {
  // street name
  street?: string;
  // the complete address
  summary?: string;
  // building name
  building_name?: string;
  // the county
  county?: string;
  // line one of address
  line_one?: string;
  // dependent locality
  locality?: string;
  // organisation if present
  organisation?: string;
  // the postcode
  postcode?: string;
  // line two of address
  line_two?: string;
  // the premise
  premise?: string;
  // post town
  town?: string;
}
