import * as m3o from "@m3o/m3o-node";

export class EthereumService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Get the balance of an ethereum wallet
  balance(request: BalanceRequest): Promise<BalanceResponse> {
    return this.client.call(
      "ethereum",
      "Balance",
      request
    ) as Promise<BalanceResponse>;
  }
  // Get transaction details by hash
  transaction(request: TransactionRequest): Promise<TransactionResponse> {
    return this.client.call(
      "ethereum",
      "Transaction",
      request
    ) as Promise<TransactionResponse>;
  }
}

export interface BalanceRequest {
  // address of wallet
  address?: string;
}

export interface BalanceResponse {
  // the account balance (in wei)
  balance?: number;
}

export interface TransactionRequest {
  // tx hash
  hash?: string;
}

export interface TransactionResponse {
  // the block hash
  block_hash?: string;
  // the block number
  block_number?: string;
  // chain id
  chain_id?: string;
  // sent from
  from_address?: string;
  // gas
  gas?: string;
  // gas price
  gas_price?: string;
  // tx hash
  hash?: string;
  // input
  input?: string;
  // max fee per gas
  max_fee_per_gas?: string;
  // max priority fee per gas
  max_priority_fee_per_gas?: string;
  // the nonce
  nonce?: string;
  r?: string;
  s?: string;
  // to address
  to_address?: string;
  // transaction index
  tx_index?: string;
  // type of transaction
  type?: string;
  v?: string;
  // value of transaction
  value?: string;
}
