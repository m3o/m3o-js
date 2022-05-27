import * as m3o from "@m3o/m3o-node";

export class CryptoService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Returns the history for the previous close
  history(request: HistoryRequest): Promise<HistoryResponse> {
    return this.client.call(
      "crypto",
      "History",
      request
    ) as Promise<HistoryResponse>;
  }
  // Get news related to a currency
  news(request: NewsRequest): Promise<NewsResponse> {
    return this.client.call("crypto", "News", request) as Promise<NewsResponse>;
  }
  // Get the last price for a given crypto ticker
  price(request: PriceRequest): Promise<PriceResponse> {
    return this.client.call(
      "crypto",
      "Price",
      request
    ) as Promise<PriceResponse>;
  }
  // Get the last quote for a given crypto ticker
  quote(request: QuoteRequest): Promise<QuoteResponse> {
    return this.client.call(
      "crypto",
      "Quote",
      request
    ) as Promise<QuoteResponse>;
  }
  // Returns the full list of supported symbols
  symbols(request: SymbolsRequest): Promise<SymbolsResponse> {
    return this.client.call(
      "crypto",
      "Symbols",
      request
    ) as Promise<SymbolsResponse>;
  }
}

export interface Article {
  // the source url
  url?: string;
  // the date published
  date?: string;
  // its description
  description?: string;
  // the source
  source?: string;
  // title of the article
  title?: string;
}

export interface HistoryRequest {
  // the crypto symbol e.g BTCUSD
  symbol?: string;
}

export interface HistoryResponse {
  // the volume
  volume?: number;
  // the close price
  close?: number;
  // the date
  date?: string;
  // the peak price
  high?: number;
  // the low price
  low?: number;
  // the open price
  open?: number;
  // the crypto symbol
  symbol?: string;
}

export interface NewsRequest {
  // cryptocurrency ticker to request news for e.g BTC
  symbol?: string;
}

export interface NewsResponse {
  // list of articles
  articles?: Article[];
  // symbol requested for
  symbol?: string;
}

export interface PriceRequest {
  // the crypto symbol e.g BTCUSD
  symbol?: string;
}

export interface PriceResponse {
  // the last price
  price?: number;
  // the crypto symbol e.g BTCUSD
  symbol?: string;
}

export interface QuoteRequest {
  // the crypto symbol e.g BTCUSD
  symbol?: string;
}

export interface QuoteResponse {
  // the bidding price
  bid_price?: number;
  // the bid size
  bid_size?: number;
  // the crypto symbol
  symbol?: string;
  // the UTC timestamp of the quote
  timestamp?: string;
  // the asking price
  ask_price?: number;
  // the ask size
  ask_size?: number;
}

export interface Symbol {
  name?: string;
  symbol?: string;
}

export interface SymbolsRequest {}

export interface SymbolsResponse {
  symbols?: Symbol[];
}
