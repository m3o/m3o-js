import * as m3o from "@m3o/m3o-node";

export class PriceService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Add a price
  add(request: AddRequest): Promise<AddResponse> {
    return this.client.call("price", "Add", request) as Promise<AddResponse>;
  }
  // Get the price of anything
  get(request: GetRequest): Promise<GetResponse> {
    return this.client.call("price", "Get", request) as Promise<GetResponse>;
  }
  // Get the index for available prices
  index(request: IndexRequest): Promise<IndexResponse> {
    return this.client.call(
      "price",
      "Index",
      request
    ) as Promise<IndexResponse>;
  }
  // List prices for a given currency
  list(request: ListRequest): Promise<ListResponse> {
    return this.client.call("price", "List", request) as Promise<ListResponse>;
  }
  // Report an invalid price
  report(request: ReportRequest): Promise<ReportResponse> {
    return this.client.call(
      "price",
      "Report",
      request
    ) as Promise<ReportResponse>;
  }
}

export interface AddRequest {
  // author of the price
  author?: string;
  // currency e.g USD
  currency?: string;
  // name of the thing e.g bitcoin
  name?: string;
  // price of the thing e.g 10001.00
  price?: number;
  // source of the price
  source?: string;
  // symbol of value
  symbol?: string;
}

export interface AddResponse {
  value?: { [key: string]: any };
}

export interface GetRequest {
  // currency to get
  currency?: string;
  // name of the value
  name?: string;
  // symbol of value
  symbol?: string;
}

export interface GetResponse {
  values?: Value[];
}

export interface Index {
  // currency of value
  currency?: string;
  // name of item
  name?: string;
  // symbol of item
  symbol?: string;
}

export interface IndexRequest {}

export interface IndexResponse {
  index?: { [key: string]: any }[];
}

export interface ListRequest {
  // currency to get
  currency?: string;
  // limit number of values
  limit?: number;
  // offset to read from
  offset?: number;
}

export interface ListResponse {
  values?: Value[];
}

export interface Report {
  author?: string;
  comment?: string;
  name?: string;
  symbol?: string;
}

export interface ReportRequest {
  // additional comment
  comment?: string;
  // name of value
  name?: string;
  // symbol of value
  symbol?: string;
}

export interface ReportResponse {}

export interface Value {
  // who added it
  author?: string;
  // currency of thing
  currency?: string;
  // name of thing
  name?: string;
  // price of thing
  price?: number;
  // where it came from
  source?: string;
  // symbol of value
  symbol?: string;
  // time it was added
  timestamp?: string;
}
