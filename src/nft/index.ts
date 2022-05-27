import * as m3o from "@m3o/m3o-node";

export class NftService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Get a single asset by the contract
  asset(request: AssetRequest): Promise<AssetResponse> {
    return this.client.call("nft", "Asset", request) as Promise<AssetResponse>;
  }
  // Return a list of assets
  assets(request: AssetsRequest): Promise<AssetsResponse> {
    return this.client.call(
      "nft",
      "Assets",
      request
    ) as Promise<AssetsResponse>;
  }
  // Get a collection by its slug
  collection(request: CollectionRequest): Promise<CollectionResponse> {
    return this.client.call(
      "nft",
      "Collection",
      request
    ) as Promise<CollectionResponse>;
  }
  // Get a list of collections
  collections(request: CollectionsRequest): Promise<CollectionsResponse> {
    return this.client.call(
      "nft",
      "Collections",
      request
    ) as Promise<CollectionsResponse>;
  }
  // Create your own NFT (coming soon)
  create(request: CreateRequest): Promise<CreateResponse> {
    return this.client.call(
      "nft",
      "Create",
      request
    ) as Promise<CreateResponse>;
  }
}

export interface Asset {
  // Owner of the NFT
  owner?: User;
  // asset contract
  contract?: Contract;
  // the image url
  image_url?: string;
  // last time sold
  last_sale?: Sale;
  // Creator of the NFT
  creator?: User;
  // listing date
  listing_date?: string;
  // the permalink
  permalink?: string;
  // the token id
  token_id?: string;
  // traits associated with the item
  traits?: { [key: string]: any }[];
  // id of the asset
  id?: number;
  // name of the asset
  name?: string;
  // is it a presale
  presale?: boolean;
  // associated collection
  collection?: Collection;
  // related description
  description?: string;
  // number of sales
  sales?: number;
}

export interface AssetRequest {
  contract_address?: string;
  token_id?: string;
}

export interface AssetResponse {
  asset?: Asset;
}

export interface AssetsRequest {
  // limit to members of a collection by slug name (case sensitive)
  collection?: string;
  // A cursor pointing to the page to retrieve
  cursor?: string;
  // limit returned assets
  limit?: number;
  // DEPRECATED offset for pagination, please use cursor instead
  offset?: number;
  // order "asc" or "desc"
  order?: string;
  // order by "sale_date", "sale_count", "sale_price", "total_price"
  order_by?: string;
}

export interface AssetsResponse {
  // A cursor to be supplied to retrieve the next page of results
  next?: string;
  // A cursor to be supplied to retrieve the previous page of results
  previous?: string;
  // list of assets
  assets?: Asset[];
}

export interface Collection {
  // image used in the banner for the collection
  banner_image_url?: string;
  // creation time
  created_at?: string;
  // an image for the collection
  image_url?: string;
  // description of the collection
  description?: string;
  // the fees that get paid out when a sale is made
  seller_fees?: string;
  // collection slug
  slug?: string;
  // sales statistics associated with the collection
  stats?: { [key: string]: any };
  // the collection's approval status on OpenSea
  safelist_request_status?: string;
  // listing of all the trait types available within this collection
  traits?: { [key: string]: any };
  // approved editors for this collection
  editors?: string[];
  // external link to the original website for the collection
  external_link?: string;
  // name of the collection
  name?: string;
  // the payment tokens accepted for this collection
  payment_tokens?: Token[];
  // payout address for the collection's royalties
  payout_address?: string;
  // a list of the contracts associated with this collection
  primary_asset_contracts?: Contract[];
}

export interface CollectionRequest {
  slug?: string;
}

export interface CollectionResponse {
  collection?: Collection;
}

export interface CollectionsRequest {
  limit?: number;
  offset?: number;
}

export interface CollectionsResponse {
  collections?: Collection[];
}

export interface Contract {
  // ethereum address
  address?: string;
  // timestamp of creation
  created_at?: string;
  // name of contract
  name?: string;
  // payout address
  payout_address?: string;
  // seller fees
  seller_fees?: string;
  // description of contract
  description?: string;
  // owner id
  owner?: number;
  // aka "ERC1155"
  schema?: string;
  // related symbol
  symbol?: string;
  // type of contract e.g "semi-fungible"
  type?: string;
}

export interface CreateRequest {
  // data if not image
  data?: string;
  // description
  description?: string;
  // image data
  image?: string;
  // name of the NFT
  name?: string;
}

export interface CreateResponse {
  asset?: Asset;
}

export interface Sale {
  event_type?: string;
  asset_decimals?: number;
  asset_token_id?: string;
  created_at?: string;
  event_timestamp?: string;
  payment_token?: Token;
  quantity?: string;
  total_price?: string;
  transaction?: Transaction;
}

export interface Token {
  address?: string;
  decimals?: number;
  eth_price?: string;
  id?: number;
  image_url?: string;
  name?: string;
  symbol?: string;
  usd_price?: string;
}

export interface Transaction {
  transaction_hash?: string;
  transaction_index?: string;
  block_hash?: string;
  block_number?: string;
  from_account?: User;
  id?: number;
  timestamp?: string;
  to_account?: User;
}

export interface User {
  address?: string;
  profile_url?: string;
  username?: string;
}
