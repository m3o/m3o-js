import * as m3o from "@m3o/m3o-node";

export class CommentsService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Create a new comment
  create(request: CreateRequest): Promise<CreateResponse> {
    return this.client.call(
      "comments",
      "Create",
      request
    ) as Promise<CreateResponse>;
  }
  // Delete a comment
  delete(request: DeleteRequest): Promise<DeleteResponse> {
    return this.client.call(
      "comments",
      "Delete",
      request
    ) as Promise<DeleteResponse>;
  }
  // Subscribe to comments events
  events(
    request: EventsRequest
  ): Promise<m3o.Stream<EventsRequest, EventsResponse>> {
    return this.client.stream("comments", "Events", request);
  }
  // List all the comments
  list(request: ListRequest): Promise<ListResponse> {
    return this.client.call(
      "comments",
      "List",
      request
    ) as Promise<ListResponse>;
  }
  // Read a comment
  read(request: ReadRequest): Promise<ReadResponse> {
    return this.client.call(
      "comments",
      "Read",
      request
    ) as Promise<ReadResponse>;
  }
  // Update a comment
  update(request: UpdateRequest): Promise<UpdateResponse> {
    return this.client.call(
      "comments",
      "Update",
      request
    ) as Promise<UpdateResponse>;
  }
}

export interface Comment {
  // time at which the comment was created
  created?: string;
  // unique id for the comment, generated if not specified
  id?: string;
  // subject of the comment
  subject?: string;
  // text of the comment
  text?: string;
  // time at which the comment was updated
  updated?: string;
}

export interface CreateRequest {
  // comment subject
  subject?: string;
  // comment items
  text?: string;
}

export interface CreateResponse {
  // The created comment
  comment?: Comment;
}

export interface DeleteRequest {
  // specify the id of the comment
  id?: string;
}

export interface DeleteResponse {
  comment?: Comment;
}

export interface EventsRequest {
  // optionally specify a comment id
  id?: string;
}

export interface EventsResponse {
  // the comment which the operation occured on
  comment?: Comment;
  // the event which occured; create, delete, update
  event?: string;
}

export interface ListRequest {}

export interface ListResponse {
  // the comment of comments
  comments?: Comment[];
}

export interface ReadRequest {
  // the comment id
  id?: string;
}

export interface ReadResponse {
  // The comment
  comment?: Comment;
}

export interface UpdateRequest {
  comment?: Comment;
}

export interface UpdateResponse {
  comment?: Comment;
}
