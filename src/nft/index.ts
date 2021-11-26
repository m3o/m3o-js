import * as m3o from "@m3o/m3o-node";

export class NftService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Vote to have the NFT api launched faster!
  vote(request: VoteRequest): Promise<VoteResponse> {
    return this.client.call("nft", "Vote", request) as Promise<VoteResponse>;
  }
}

export interface VoteRequest {
  // optional message
  message?: string;
}

export interface VoteResponse {
  // response message
  message?: string;
}
