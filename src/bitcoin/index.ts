import * as m3o from "@m3o/m3o-node";

export class BitcoinService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Get the BTC balance of an address
  balance(request: BalanceRequest): Promise<BalanceResponse> {
    return this.client.call(
      "bitcoin",
      "Balance",
      request
    ) as Promise<BalanceResponse>;
  }
  // Get the price of bitcoin
  price(request: PriceRequest): Promise<PriceResponse> {
    return this.client.call(
      "bitcoin",
      "Price",
      request
    ) as Promise<PriceResponse>;
  }
  // Get the details of a transaction
  transaction(request: TransactionRequest): Promise<TransactionResponse> {
    return this.client.call(
      "bitcoin",
      "Transaction",
      request
    ) as Promise<TransactionResponse>;
  }
}

export interface BalanceRequest {
  // address to lookup
  address?: string;
}

export interface BalanceResponse {
  // total BTC as satoshis
  balance?: number;
}

export interface Input {
  prev_out?: Prev;
  script?: string;
}

export interface Output {
  address?: string;
  hash?: string;
  script?: string;
  spent?: boolean;
  tx_index?: number;
  value?: number;
}

export interface Prev {
  address?: string;
  n?: number;
  script?: string;
  spent?: boolean;
  tx_index?: number;
  value?: number;
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

export interface TransactionRequest {
  // the transaction hash
  hash?: string;
}

export interface TransactionResponse {
  // block height
  block_height?: number;
  // blck index
  block_index?: number;
  // double spend
  double_spend?: boolean;
  // fees
  fee?: number;
  // transaction hash
  hash?: string;
  // inputs
  inputs?: Input[];
  // lock time
  lock_time?: number;
  // outputs
  outputs?: Output[];
  // relay
  relay?: string;
  // transaction size
  size?: number;
  // tx index
  tx_index?: number;
  // the version
  version?: number;
  // vin
  vin_sz?: number;
  // vout
  vout_sz?: number;
  // weight
  weight?: number;
}
