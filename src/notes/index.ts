import * as m3o from "@m3o/m3o-node";

export class NotesService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Create a new note
  create(request: CreateRequest): Promise<CreateResponse> {
    return this.client.call(
      "notes",
      "Create",
      request
    ) as Promise<CreateResponse>;
  }
  // Delete a note
  delete(request: DeleteRequest): Promise<DeleteResponse> {
    return this.client.call(
      "notes",
      "Delete",
      request
    ) as Promise<DeleteResponse>;
  }
  // Subscribe to notes events
  events(
    request: EventsRequest
  ): Promise<m3o.Stream<EventsRequest, EventsResponse>> {
    return this.client.stream("notes", "Events", request);
  }
  // List all the notes
  list(request: ListRequest): Promise<ListResponse> {
    return this.client.call("notes", "List", request) as Promise<ListResponse>;
  }
  // Read a note
  read(request: ReadRequest): Promise<ReadResponse> {
    return this.client.call("notes", "Read", request) as Promise<ReadResponse>;
  }
  // Update a note
  update(request: UpdateRequest): Promise<UpdateResponse> {
    return this.client.call(
      "notes",
      "Update",
      request
    ) as Promise<UpdateResponse>;
  }
}

export interface CreateRequest {
  // note text
  text?: string;
  // note title
  title?: string;
}

export interface CreateResponse {
  // The created note
  note?: Note;
}

export interface DeleteRequest {
  // specify the id of the note
  id?: string;
}

export interface DeleteResponse {
  note?: Note;
}

export interface EventsRequest {
  // optionally specify a note id
  id?: string;
}

export interface EventsResponse {
  // the note which the operation occured on
  note?: Note;
  // the event which occured; create, delete, update
  event?: string;
}

export interface ListRequest {}

export interface ListResponse {
  // the list of notes
  notes?: Note[];
}

export interface Note {
  // time at which the note was created
  created?: string;
  // unique id for the note, generated if not specified
  id?: string;
  // text within the note
  text?: string;
  // title of the note
  title?: string;
  // time at which the note was updated
  updated?: string;
}

export interface ReadRequest {
  // the note id
  id?: string;
}

export interface ReadResponse {
  // The note
  note?: Note;
}

export interface UpdateRequest {
  note?: Note;
}

export interface UpdateResponse {
  note?: Note;
}
