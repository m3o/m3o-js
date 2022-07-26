import * as m3o from "@m3o/m3o-node";

export class WalletService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Get the balance of a wallet
  balance(request: BalanceRequest): Promise<BalanceResponse> {
    return this.client.call(
      "wallet",
      "Balance",
      request
    ) as Promise<BalanceResponse>;
  }
  // Create a new wallet
  create(request: CreateRequest): Promise<CreateResponse> {
    return this.client.call(
      "wallet",
      "Create",
      request
    ) as Promise<CreateResponse>;
  }
  // Add credit to a wallet
  credit(request: CreditRequest): Promise<CreditResponse> {
    return this.client.call(
      "wallet",
      "Credit",
      request
    ) as Promise<CreditResponse>;
  }
  // Debit a wallet
  debit(request: DebitRequest): Promise<DebitResponse> {
    return this.client.call(
      "wallet",
      "Debit",
      request
    ) as Promise<DebitResponse>;
  }
  // Delete a wallet
  delete(request: DeleteRequest): Promise<DeleteResponse> {
    return this.client.call(
      "wallet",
      "Delete",
      request
    ) as Promise<DeleteResponse>;
  }
  // List your wallets
  list(request: ListRequest): Promise<ListResponse> {
    return this.client.call("wallet", "List", request) as Promise<ListResponse>;
  }
  // Get wallet by id
  read(request: ReadRequest): Promise<ReadResponse> {
    return this.client.call("wallet", "Read", request) as Promise<ReadResponse>;
  }
  // List the transactions for a wallet
  transactions(request: TransactionsRequest): Promise<TransactionsResponse> {
    return this.client.call(
      "wallet",
      "Transactions",
      request
    ) as Promise<TransactionsResponse>;
  }
  // Make a transfer from one wallet to another
  transfer(request: TransferRequest): Promise<TransferResponse> {
    return this.client.call(
      "wallet",
      "Transfer",
      request
    ) as Promise<TransferResponse>;
  }
}

export interface Account {
  // current balance
  balance?: number;
  // description of the wallet
  description?: string;
  // wallet id
  id?: string;
  // name of the wallet
  name?: string;
}

export interface BalanceRequest {
  // wallet id
  id?: string;
}

export interface BalanceResponse {
  // current balance
  balance?: number;
}

export interface CreateRequest {
  // description for wallet
  description?: string;
  // optional id
  id?: string;
  // name of the wallet
  name?: string;
}

export interface CreateResponse {
  // the wallet created
  account?: { [key: string]: any };
}

export interface CreditRequest {
  // amount to credit
  amount?: number;
  // wallet id
  id?: string;
  // idempotency key
  idempotency_key?: string;
  // reference note
  reference?: string;
  // if the transaction is visible
  visible?: boolean;
}

export interface CreditResponse {
  // the new balance
  balance?: number;
}

export interface DebitRequest {
  // amount to debit
  amount?: number;
  // wallet
  id?: string;
  // idempotency key
  idempotency_key?: string;
  // reference note
  reference?: string;
  // if the transaction is visible
  visible?: boolean;
}

export interface DebitResponse {
  // the new balance
  balance?: number;
}

export interface DeleteRequest {
  id?: string;
}

export interface DeleteResponse {}

export interface ListRequest {}

export interface ListResponse {
  accounts?: Account[];
}

export interface ReadRequest {
  // wallet id
  id?: string;
}

export interface ReadResponse {
  account?: { [key: string]: any };
}

export interface Transaction {
  // amount in transaction
  amount?: number;
  // time of transaction
  created?: string;
  // unique id of transaction
  id?: string;
  // associated metadata
  metadata?: { [key: string]: string };
  // reference note
  reference?: string;
}

export interface TransactionsRequest {
  // wallet id
  id?: string;
}

export interface TransactionsResponse {
  // list of transactions
  transactions?: Transaction[];
}

export interface TransferRequest {
  // amount to transfer
  amount?: number;
  // from wallet id
  from_id?: string;
  // reference
  reference?: string;
  // to wallet id
  to_id?: string;
  // visible?
  visible?: boolean;
}

export interface TransferResponse {}
