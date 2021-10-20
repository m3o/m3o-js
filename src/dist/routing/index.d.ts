export declare class RoutingService {
  private client;
  constructor(token: string);
  directions(request: DirectionsRequest): Promise<DirectionsResponse>;
  eta(request: EtaRequest): Promise<EtaResponse>;
  route(request: RouteRequest): Promise<RouteResponse>;
}
export interface Direction {
  distance?: number;
  duration?: number;
  instruction?: string;
  intersections?: Intersection[];
  maneuver?: {
    [key: string]: any;
  };
  name?: string;
  reference?: string;
}
export interface DirectionsRequest {
  destination?: Point;
  origin?: Point;
}
export interface DirectionsResponse {
  directions?: Direction[];
  distance?: number;
  duration?: number;
  waypoints?: Waypoint[];
}
export interface EtaRequest {
  destination?: Point;
  origin?: Point;
  speed?: number;
  type?: string;
}
export interface EtaResponse {
  duration?: number;
}
export interface Intersection {
  bearings?: number[];
  location?: Point;
}
export interface Maneuver {
  action?: string;
  bearingAfter?: number;
  bearingBefore?: number;
  direction?: string;
  location?: Point;
}
export interface Point {
  latitude?: number;
  longitude?: number;
}
export interface RouteRequest {
  destination?: Point;
  origin?: Point;
}
export interface RouteResponse {
  distance?: number;
  duration?: number;
  waypoints?: Waypoint[];
}
export interface Waypoint {
  location?: Point;
  name?: string;
}
