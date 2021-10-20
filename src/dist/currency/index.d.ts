export declare class CurrencyService {
  private client;
  constructor(token: string);
  codes(request: CodesRequest): Promise<CodesResponse>;
  convert(request: ConvertRequest): Promise<ConvertResponse>;
  history(request: HistoryRequest): Promise<HistoryResponse>;
  rates(request: RatesRequest): Promise<RatesResponse>;
}
export interface Code {
  currency?: string;
  name?: string;
}
export interface CodesRequest {}
export interface CodesResponse {
  codes?: Code[];
}
export interface ConvertRequest {
  amount?: number;
  from?: string;
  to?: string;
}
export interface ConvertResponse {
  amount?: number;
  from?: string;
  rate?: number;
  to?: string;
}
export interface HistoryRequest {
  code?: string;
  date?: string;
}
export interface HistoryResponse {
  code?: string;
  date?: string;
  rates?: {
    [key: string]: number;
  };
}
export interface RatesRequest {
  code?: string;
}
export interface RatesResponse {
  code?: string;
  rates?: {
    [key: string]: number;
  };
}
