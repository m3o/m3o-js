import * as m3o from "@m3o/m3o-node";

export class JokeService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  //
  random(request: RandomRequest): Promise<RandomResponse> {
    return this.client.call(
      "joke",
      "Random",
      request
    ) as Promise<RandomResponse>;
  }
}

export interface JokeInfo {
  body?: string;
  category?: string;
  id?: string;
  // the source of joke
  source?: string;
  title?: string;
}

export interface RandomRequest {
  // the count of random jokes want, maximum: 10
  count?: number;
}

export interface RandomResponse {
  jokes?: JokeInfo[];
}
