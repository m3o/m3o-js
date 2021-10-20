export declare class ForexService {
  private client;
  constructor(token: string);
  history(request: HistoryRequest): Promise<HistoryResponse>;
  price(request: PriceRequest): Promise<PriceResponse>;
  quote(request: QuoteRequest): Promise<QuoteResponse>;
}
export interface HistoryRequest {
  symbol?: string;
}
export interface HistoryResponse {
  close?: number;
  date?: string;
  high?: number;
  low?: number;
  open?: number;
  symbol?: string;
  volume?: number;
}
export interface PriceRequest {
  symbol?: string;
}
export interface PriceResponse {
  price?: number;
  symbol?: string;
}
export interface QuoteRequest {
  symbol?: string;
}
export interface QuoteResponse {
  askPrice?: number;
  bidPrice?: number;
  symbol?: string;
  timestamp?: string;
}
