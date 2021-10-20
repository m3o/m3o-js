export declare class WeatherService {
  private client;
  constructor(token: string);
  forecast(request: ForecastRequest): Promise<ForecastResponse>;
  now(request: NowRequest): Promise<NowResponse>;
}
export interface Forecast {
  avgTempC?: number;
  avgTempF?: number;
  chanceOfRain?: number;
  condition?: string;
  date?: string;
  iconUrl?: string;
  maxTempC?: number;
  maxTempF?: number;
  minTempC?: number;
  minTempF?: number;
  sunrise?: string;
  sunset?: string;
  willItRain?: boolean;
}
export interface ForecastRequest {
  days?: number;
  location?: string;
}
export interface ForecastResponse {
  country?: string;
  forecast?: {
    avgTempC?: number;
    avgTempF?: number;
    chanceOfRain?: number;
    condition?: string;
    date?: string;
    iconUrl?: string;
    maxTempC?: number;
    maxTempF?: number;
    minTempC?: number;
    minTempF?: number;
    sunrise?: string;
    sunset?: string;
    willItRain?: boolean;
  }[];
  latitude?: number;
  localTime?: string;
  location?: string;
  longitude?: number;
  region?: string;
  timezone?: string;
}
export interface NowRequest {
  location?: string;
}
export interface NowResponse {
  cloud?: number;
  condition?: string;
  country?: string;
  daytime?: boolean;
  feelsLikeC?: number;
  feelsLikeF?: number;
  humidity?: number;
  iconUrl?: string;
  latitude?: number;
  localTime?: string;
  location?: string;
  longitude?: number;
  region?: string;
  tempC?: number;
  tempF?: number;
  timezone?: string;
  windDegree?: number;
  windDirection?: string;
  windKph?: number;
  windMph?: number;
}
