export declare class StockService {
  private client;
  constructor(token: string);
  history(request: HistoryRequest): Promise<HistoryResponse>;
  orderBook(request: OrderBookRequest): Promise<OrderBookResponse>;
  price(request: PriceRequest): Promise<PriceResponse>;
  quote(request: QuoteRequest): Promise<QuoteResponse>;
}
export interface HistoryRequest {
  date?: string;
  stock?: string;
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
export interface Order {
  askPrice?: number;
  askSize?: number;
  bidPrice?: number;
  bidSize?: number;
  timestamp?: string;
}
export interface OrderBookRequest {
  date?: string;
  end?: string;
  limit?: number;
  start?: string;
  stock?: string;
}
export interface OrderBookResponse {
  date?: string;
  orders?: Order[];
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
