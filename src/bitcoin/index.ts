import * as m3o from "@m3o/m3o-node";

export class BitcoinService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Get the price of bitcoin
  price(request: PriceRequest): Promise<PriceResponse> {
    return this.client.call(
      "bitcoin",
      "Price",
      request
    ) as Promise<PriceResponse>;
  }
}

export interface PriceRequest {
  // symbol to use e.g BTCUSD
  symbol?: string;
}

export interface PriceResponse {
  // The price of bitcoin
  price?: number;
  // The symbol of pricing e.g BTCUSD
  symbol?: string;
}
