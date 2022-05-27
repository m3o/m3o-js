import * as m3o from "@m3o/m3o-node";

export class GoogleService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Search for videos on Google
  search(request: SearchRequest): Promise<SearchResponse> {
    return this.client.call(
      "google",
      "Search",
      request
    ) as Promise<SearchResponse>;
  }
}

export interface SearchRequest {
  // Query to search for
  query?: string;
}

export interface SearchResponse {
  // List of results for the query
  results?: SearchResult[];
}

export interface SearchResult {
  // the full url for the result
  url?: string;
  // abridged version of this search result’s URL, e.g. www.exampe.com
  display_url?: string;
  // id of the result
  id?: string;
  // kind of result; "search"
  kind?: string;
  // the result snippet
  snippet?: string;
  // title of the result
  title?: string;
}
