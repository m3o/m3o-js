import * as m3o from "@m3o/m3o-node";

export class GifsService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Search for a GIF
  search(request: SearchRequest): Promise<SearchResponse> {
    return this.client.call(
      "gifs",
      "Search",
      request
    ) as Promise<SearchResponse>;
  }
}

export interface Gif {
  // URL used for embedding the GIF
  embed_url?: string;
  // The ID of the GIF
  id?: string;
  // The different formats available for this GIF
  images?: ImageFormats;
  // The content rating for the GIF
  rating?: string;
  // A short URL for this GIF
  short_url?: string;
  // The slug used in the GIF's URL
  slug?: string;
  // The page on which this GIF was found
  source?: string;
  // The title for this GIF
  title?: string;
  // The URL for this GIF
  url?: string;
}

export interface ImageFormat {
  // height
  height?: number;
  // size of the MP4 version
  mp4_size?: number;
  // URL to an MP4 version of the gif
  mp4_url?: string;
  // size in bytes
  size?: number;
  // URL of the gif
  url?: string;
  // size of the webp version
  webp_size?: number;
  // URL to a webp version of the gif
  webp_url?: string;
  // width
  width?: number;
}

export interface ImageFormats {
  // A downsized version of the GIF < 2MB
  downsized?: ImageFormat;
  // A downsized version of the GIF < 8MB
  downsized_large?: ImageFormat;
  // A downsized version of the GIF < 5MB
  downsized_medium?: ImageFormat;
  // A downsized version of the GIF < 200kb
  downsized_small?: ImageFormat;
  // Static image of the downsized version of the GIF
  downsized_still?: ImageFormat;
  // Version of the GIF with fixed height of 200 pixels. Good for mobile use
  fixed_height?: ImageFormat;
  // Version of the GIF with fixed height of 200 pixels and number of frames reduced to 6
  fixed_height_downsampled?: ImageFormat;
  // Version of the GIF with fixed height of 100 pixels. Good for mobile keyboards
  fixed_height_small?: ImageFormat;
  // Static image of the GIF with fixed height of 100 pixels
  fixed_height_small_still?: ImageFormat;
  // Static image of the GIF with fixed height of 200 pixels
  fixed_height_still?: ImageFormat;
  // Version of the GIF with fixed width of 200 pixels. Good for mobile use
  fixed_width?: ImageFormat;
  // Version of the GIF with fixed width of 200 pixels and number of frames reduced to 6
  fixed_width_downsampled?: ImageFormat;
  // Version of the GIF with fixed width of 100 pixels. Good for mobile keyboards
  fixed_width_small?: ImageFormat;
  // Static image of the GIF with fixed width of 100 pixels
  fixed_width_small_still?: ImageFormat;
  // Static image of the GIF with fixed width of 200 pixels
  fixed_width_still?: ImageFormat;
  // 15 second version of the GIF looping
  looping?: ImageFormat;
  // The original GIF. Good for desktop use
  original?: ImageFormat;
  // Static image of the original version of the GIF
  original_still?: ImageFormat;
  // mp4 version of the GIF <50kb displaying first 1-2 secs
  preview?: ImageFormat;
  // Version of the GIF <50kb displaying first 1-2 secs
  preview_gif?: ImageFormat;
}

export interface Pagination {
  // total number returned in this response
  count?: number;
  // position in pagination
  offset?: number;
  // total number of results available
  total_count?: number;
}

export interface SearchRequest {
  // ISO 2 letter language code for regional content
  lang?: string;
  // Max number of gifs to return. Defaults to 25
  limit?: number;
  // The start position of results (used with pagination)
  offset?: number;
  // The search term
  query?: string;
  // Apply age related content filter. "g", "pg", "pg-13", or "r". Defaults to "g"
  rating?: string;
}

export interface SearchResponse {
  // list of results
  data?: Gif[];
  // information on pagination
  pagination?: { [key: string]: any };
}
