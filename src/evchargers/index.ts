import * as m3o from "@m3o/m3o-node";

export class EvchargersService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Retrieve reference data as used by this API and in conjunction with the Search endpoint
  referenceData(request: ReferenceDataRequest): Promise<ReferenceDataResponse> {
    return this.client.call(
      "evchargers",
      "ReferenceData",
      request
    ) as Promise<ReferenceDataResponse>;
  }
  // Search by giving a coordinate and a max distance, or bounding box and optional filters
  search(request: SearchRequest): Promise<SearchResponse> {
    return this.client.call(
      "evchargers",
      "Search",
      request
    ) as Promise<SearchResponse>;
  }
}

export interface Address {
  // Any comments about how to access the charger
  access_comments?: string;
  address_line_1?: string;
  address_line_2?: string;
  country?: Country;
  title?: string;
  town?: string;
  country_id?: string;
  lat_lng?: string;
  location?: Coordinates;
  postcode?: string;
  state_or_province?: string;
}

export interface BoundingBox {
  bottom_left?: Coordinates;
  top_right?: Coordinates;
}

export interface ChargerType {
  comments?: string;
  id?: string;
  // Is this 40KW+
  is_fast_charge_capable?: boolean;
  title?: string;
}

export interface CheckinStatusType {
  id?: string;
  is_automated?: boolean;
  is_positive?: boolean;
  title?: string;
}

export interface Connection {
  // The ID of the connection type
  connection_type_id?: string;
  // The current
  current?: string;
  // The level of charging power available
  level_id?: string;
  // The power in KW
  power?: number;
  // The voltage offered
  voltage?: number;
  // The amps offered
  amps?: number;
  connection_type?: ConnectionType;
  level?: ChargerType;
  reference?: string;
}

export interface ConnectionType {
  title?: string;
  formal_name?: string;
  id?: string;
  is_discontinued?: boolean;
  is_obsolete?: boolean;
}

export interface Coordinates {
  latitude?: number;
  longitude?: number;
}

export interface Country {
  continent_code?: string;
  id?: string;
  iso_code?: string;
  title?: string;
}

export interface CurrentType {
  description?: string;
  id?: string;
  title?: string;
}

export interface DataProvider {
  comments?: string;
  data_provider_status_type?: DataProviderStatusType;
  id?: string;
  // How is this data licensed
  license?: string;
  title?: string;
  website?: string;
}

export interface DataProviderStatusType {
  id?: string;
  is_provider_enabled?: boolean;
  title?: string;
}

export interface Operator {
  fault_report_email?: string;
  id?: string;
  phone_secondary?: string;
  website?: string;
  title?: string;
  comments?: string;
  contact_email?: string;
  // Is this operator a private individual vs a company
  is_private_individual?: boolean;
  phone_primary?: string;
}

export interface Poi {
  // The operator
  operator?: Operator;
  // The address
  address?: Address;
  // The ID of the charger
  id?: string;
  // The ID of the data provider
  data_provider_id?: string;
  // The number of charging points
  num_points?: number;
  // The ID of the operator of the charger
  operator_id?: string;
  // The type of usage
  usage_type?: UsageType;
  // The type of usage for this charger point (is it public, membership required, etc)
  usage_type_id?: string;
  // The connections available at this charge point
  connections?: Connection[];
  // The cost of charging
  cost?: string;
}

export interface ReferenceDataRequest {}

export interface ReferenceDataResponse {
  // The status of the charger
  status_types?: StatusType[];
  // The different types of usage
  usage_types?: UsageType[];
  // The types of checkin status
  checkin_status_types?: CheckinStatusType[];
  // The types of current
  current_types?: CurrentType[];
  // The providers of the charger data
  data_providers?: DataProvider[];
  // The companies operating the chargers
  operators?: Operator[];
  // The types of user comment
  user_comment_types?: UserCommentType[];
  // The types of charger
  charger_types?: ChargerType[];
  // The types of connection
  connection_types?: ConnectionType[];
  // The countries
  countries?: Country[];
  // The status of a submission
  submission_status_types?: SubmissionStatusType[];
}

export interface SearchRequest {
  // IDs of the connection type
  connection_types?: string[];
  // Country ID
  country_id?: string;
  // Supported charging levels
  levels?: string[];
  // Maximum number of results to return, defaults to 100
  max_results?: number;
  // Usage of the charge point (is it public, membership required, etc)
  usage_types?: string[];
  // Bounding box to search within (top left and bottom right coordinates)
  box?: BoundingBox;
  // Search distance from point in metres, defaults to 5000m
  distance?: number;
  // Coordinates from which to begin search
  location?: Coordinates;
  // Minimum power in KW. Note: data not available for many chargers
  min_power?: number;
  // IDs of the the EV charger operator
  operators?: string[];
}

export interface SearchResponse {
  pois?: Poi[];
}

export interface StatusType {
  id?: string;
  is_operational?: boolean;
  title?: string;
}

export interface SubmissionStatusType {
  id?: string;
  is_live?: boolean;
  title?: string;
}

export interface UsageType {
  id?: string;
  is_access_key_required?: boolean;
  is_membership_required?: boolean;
  is_pay_at_location?: boolean;
  title?: string;
}

export interface UserCommentType {
  id?: string;
  title?: string;
}
