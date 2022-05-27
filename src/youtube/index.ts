import * as m3o from "@m3o/m3o-node";

export class YoutubeService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Embed a YouTube video
  embed(request: EmbedRequest): Promise<EmbedResponse> {
    return this.client.call(
      "youtube",
      "Embed",
      request
    ) as Promise<EmbedResponse>;
  }
  // Search for videos on YouTube
  search(request: SearchRequest): Promise<SearchResponse> {
    return this.client.call(
      "youtube",
      "Search",
      request
    ) as Promise<SearchResponse>;
  }
}

export interface EmbedRequest {
  // provide the youtube url
  url?: string;
}

export interface EmbedResponse {
  // the short url
  short_url?: string;
  // the embeddable link
  embed_url?: string;
  // the script code
  html_script?: string;
  // the full url
  long_url?: string;
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
  // if live broadcast then indicates activity:
  // none, upcoming, live, completed
  broadcasting?: string;
  // the channel id
  channel_id?: string;
  // id of the result
  id?: string;
  // the associated url
  url?: string;
  // the channel title
  channel_title?: string;
  // the result description
  description?: string;
  // kind of result: "video", "channel", "playlist"
  kind?: string;
  // published at time
  published_at?: string;
  // title of the result
  title?: string;
}
