import * as m3o from "@m3o/m3o-node";

export class PlaceService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Search for places nearby, points of interest and geographic locations
  nearby(request: NearbyRequest): Promise<NearbyResponse> {
    return this.client.call(
      "place",
      "Nearby",
      request
    ) as Promise<NearbyResponse>;
  }
  //
  search(request: SearchRequest): Promise<SearchResponse> {
    return this.client.call(
      "place",
      "Search",
      request
    ) as Promise<SearchResponse>;
  }
}

export interface NearbyRequest {
  // Keyword to include in the search
  keyword?: string;
  // specify the location by lat,lng e.g -33.8670522,-151.1957362
  location?: string;
  // Name of the place to search for
  name?: string;
  // Whether the place is open now
  open_now?: boolean;
  // radius in meters within which to search
  radius?: number;
  // Type of place. https://developers.google.com/maps/documentation/places/web-service/supported_types
  type?: string;
}

export interface NearbyResponse {
  results?: Result[];
}

export interface Result {
  // address of place
  address?: string;
  // url of an icon
  icon_url?: string;
  // lat/lng of place
  location?: string;
  // name of the place
  name?: string;
  // open now
  open_now?: boolean;
  // opening hours
  opening_hours?: string;
  // rating from 1.0 to 5.0
  rating?: number;
  // type of location
  type?: string;
  // feature types
  types?: string[];
  // simplified address
  vicinity?: string;
}

export interface SearchRequest {
  // the location by lat,lng e.g -33.8670522,-151.1957362
  location?: string;
  // Whether the place is open now
  open_now?: boolean;
  // the text string on which to search, for example: "restaurant"
  query?: string;
  // radius in meters within which to search
  radius?: number;
  // Type of place. https://developers.google.com/maps/documentation/places/web-service/supported_types
  type?: string;
}

export interface SearchResponse {
  results?: Result[];
}
