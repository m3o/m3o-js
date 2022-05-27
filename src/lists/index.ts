import * as m3o from "@m3o/m3o-node";

export class ListsService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Create a new list
  create(request: CreateRequest): Promise<CreateResponse> {
    return this.client.call(
      "lists",
      "Create",
      request
    ) as Promise<CreateResponse>;
  }
  // Delete a list
  delete(request: DeleteRequest): Promise<DeleteResponse> {
    return this.client.call(
      "lists",
      "Delete",
      request
    ) as Promise<DeleteResponse>;
  }
  // Subscribe to lists events
  events(
    request: EventsRequest
  ): Promise<m3o.Stream<EventsRequest, EventsResponse>> {
    return this.client.stream("lists", "Events", request);
  }
  // List all the lists
  list(request: ListRequest): Promise<ListResponse> {
    return this.client.call("lists", "List", request) as Promise<ListResponse>;
  }
  // Read a list
  read(request: ReadRequest): Promise<ReadResponse> {
    return this.client.call("lists", "Read", request) as Promise<ReadResponse>;
  }
  // Update a list
  update(request: UpdateRequest): Promise<UpdateResponse> {
    return this.client.call(
      "lists",
      "Update",
      request
    ) as Promise<UpdateResponse>;
  }
}

export interface CreateRequest {
  // list items
  items?: string[];
  // list name
  name?: string;
}

export interface CreateResponse {
  // The created list
  list?: List;
}

export interface DeleteRequest {
  // specify the id of the list
  id?: string;
}

export interface DeleteResponse {
  list?: List;
}

export interface EventsRequest {
  // optionally specify a list id
  id?: string;
}

export interface EventsResponse {
  // the event which occured; create, delete, update
  event?: string;
  // the list which the operation occured on
  list?: List;
}

export interface List {
  // time at which the list was created
  created?: string;
  // unique id for the list, generated if not specified
  id?: string;
  // items within the list
  items?: string[];
  // name of the list
  name?: string;
  // time at which the list was updated
  updated?: string;
}

export interface ListRequest {}

export interface ListResponse {
  // the list of lists
  lists?: List[];
}

export interface ReadRequest {
  // the list id
  id?: string;
}

export interface ReadResponse {
  // The list
  list?: List;
}

export interface UpdateRequest {
  list?: List;
}

export interface UpdateResponse {
  list?: List;
}
