export declare class CryptoService {
  private client;
  constructor(token: string);
  history(request: HistoryRequest): Promise<HistoryResponse>;
  news(request: NewsRequest): Promise<NewsResponse>;
  price(request: PriceRequest): Promise<PriceResponse>;
  quote(request: QuoteRequest): Promise<QuoteResponse>;
}
export interface Article {
  date?: string;
  description?: string;
  source?: string;
  title?: string;
  url?: string;
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
export interface NewsRequest {
  symbol?: string;
}
export interface NewsResponse {
  articles?: Article[];
  symbol?: string;
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
  askSize?: number;
  bidPrice?: number;
  bidSize?: number;
  symbol?: string;
  timestamp?: string;
}
