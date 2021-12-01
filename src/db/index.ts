import * as m3o from "@m3o/m3o-node";

export class DbService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Count records in a table
  count(request: CountRequest): Promise<CountResponse> {
    return this.client.call("db", "Count", request) as Promise<CountResponse>;
  }
  // Create a record in the database. Optionally include an "id" field otherwise it's set automatically.
  create(request: CreateRequest): Promise<CreateResponse> {
    return this.client.call("db", "Create", request) as Promise<CreateResponse>;
  }
  // Delete a record in the database by id.
  delete(request: DeleteRequest): Promise<DeleteResponse> {
    return this.client.call("db", "Delete", request) as Promise<DeleteResponse>;
  }
  // Drop a table in the DB
  dropTable(request: DropTableRequest): Promise<DropTableResponse> {
    return this.client.call(
      "db",
      "DropTable",
      request
    ) as Promise<DropTableResponse>;
  }
  // List tables in the DB
  listTables(request: ListTablesRequest): Promise<ListTablesResponse> {
    return this.client.call(
      "db",
      "ListTables",
      request
    ) as Promise<ListTablesResponse>;
  }
  // Read data from a table. Lookup can be by ID or via querying any field in the record.
  read(request: ReadRequest): Promise<ReadResponse> {
    return this.client.call("db", "Read", request) as Promise<ReadResponse>;
  }
  // Rename a table
  renameTable(request: RenameTableRequest): Promise<RenameTableResponse> {
    return this.client.call(
      "db",
      "RenameTable",
      request
    ) as Promise<RenameTableResponse>;
  }
  // Truncate the records in a table
  truncate(request: TruncateRequest): Promise<TruncateResponse> {
    return this.client.call(
      "db",
      "Truncate",
      request
    ) as Promise<TruncateResponse>;
  }
  // Update a record in the database. Include an "id" in the record to update.
  update(request: UpdateRequest): Promise<UpdateResponse> {
    return this.client.call("db", "Update", request) as Promise<UpdateResponse>;
  }
}

export interface CountRequest {
  // specify the table name
  table?: string;
}

export interface CountResponse {
  // the number of records in the table
  count?: number;
}

export interface CreateRequest {
  // optional record id to use
  id?: string;
  // JSON encoded record or records (can be array or object)
  record?: { [key: string]: any };
  // Optional table name. Defaults to 'default'
  table?: string;
}

export interface CreateResponse {
  // The id of the record (either specified or automatically created)
  id?: string;
}

export interface DeleteRequest {
  // id of the record
  id?: string;
  // Optional table name. Defaults to 'default'
  table?: string;
}

export interface DeleteResponse {}

export interface DropTableRequest {
  table?: string;
}

export interface DropTableResponse {}

export interface ListTablesRequest {}

export interface ListTablesResponse {
  // list of tables
  tables?: string[];
}

export interface ReadRequest {
  // Read by id. Equivalent to 'id == "your-id"'
  id?: string;
  // Maximum number of records to return. Default limit is 25.
  // Maximum limit is 1000. Anything higher will return an error.
  limit?: number;
  offset?: number;
  // 'asc' (default), 'desc'
  order?: string;
  // field name to order by
  orderBy?: string;
  // Examples: 'age >= 18', 'age >= 18 and verified == true'
  // Comparison operators: '==', '!=', '<', '>', '<=', '>='
  // Logical operator: 'and'
  // Dot access is supported, eg: 'user.age == 11'
  // Accessing list elements is not supported yet.
  query?: string;
  // Optional table name. Defaults to 'default'
  table?: string;
}

export interface ReadResponse {
  // JSON encoded records
  records?: { [key: string]: any }[];
}

export interface RenameTableRequest {
  // current table name
  from?: string;
  // new table name
  to?: string;
}

export interface RenameTableResponse {}

export interface TruncateRequest {
  table?: string;
}

export interface TruncateResponse {}

export interface UpdateRequest {
  // The id of the record. If not specified it is inferred from the 'id' field of the record
  id?: string;
  // record, JSON object
  record?: { [key: string]: any };
  // Optional table name. Defaults to 'default'
  table?: string;
}

export interface UpdateResponse {}
