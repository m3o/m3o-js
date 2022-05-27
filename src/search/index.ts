import * as m3o from "@m3o/m3o-node";

export class SearchService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Create an index by name
  createIndex(request: CreateIndexRequest): Promise<CreateIndexResponse> {
    return this.client.call(
      "search",
      "CreateIndex",
      request
    ) as Promise<CreateIndexResponse>;
  }
  // Delete an index by name
  deleteIndex(request: DeleteIndexRequest): Promise<DeleteIndexResponse> {
    return this.client.call(
      "search",
      "DeleteIndex",
      request
    ) as Promise<DeleteIndexResponse>;
  }
  // Delete a record given its ID
  delete(request: DeleteRequest): Promise<DeleteResponse> {
    return this.client.call(
      "search",
      "Delete",
      request
    ) as Promise<DeleteResponse>;
  }
  // Index a record i.e. insert a document to search for.
  index(request: IndexRequest): Promise<IndexResponse> {
    return this.client.call(
      "search",
      "Index",
      request
    ) as Promise<IndexResponse>;
  }
  // Search for records in a given in index
  search(request: SearchRequest): Promise<SearchResponse> {
    return this.client.call(
      "search",
      "Search",
      request
    ) as Promise<SearchResponse>;
  }
}

export interface CreateIndexRequest {
  // The name of the index
  index?: string;
}

export interface CreateIndexResponse {}

export interface DeleteIndexRequest {
  // The name of the index to delete
  index?: string;
}

export interface DeleteIndexResponse {}

export interface DeleteRequest {
  // The ID of the record to delete
  id?: string;
  // The index the record belongs to
  index?: string;
}

export interface DeleteResponse {}

export interface Field {
  // The name of the field. Use a `.` separator to define nested fields e.g. foo.bar
  name?: string;
  // The type of the field - string, number
  type?: string;
}

export interface IndexRequest {
  // The data to index
  data?: { [key: string]: any };
  // Optional ID for the record
  id?: string;
  // The index this record belongs to
  index?: string;
}

export interface IndexResponse {
  // the indexed record
  record?: Record;
}

export interface Record {
  // The JSON contents of the record
  data?: { [key: string]: any };
  // The ID for this record. If blank, one will be generated
  id?: string;
}

export interface SearchRequest {
  // The index the record belongs to
  index?: string;
  // The query. See docs for query language examples
  query?: string;
}

export interface SearchResponse {
  // The matching records
  records?: Record[];
}
