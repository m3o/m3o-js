import * as m3o from "@m3o/m3o-node";

export class AnalyticsService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Delete an event
  delete(request: DeleteRequest): Promise<DeleteResponse> {
    return this.client.call(
      "analytics",
      "Delete",
      request
    ) as Promise<DeleteResponse>;
  }
  // List all events
  list(request: ListRequest): Promise<ListResponse> {
    return this.client.call(
      "analytics",
      "List",
      request
    ) as Promise<ListResponse>;
  }
  // Get a single event
  read(request: ReadRequest): Promise<ReadResponse> {
    return this.client.call(
      "analytics",
      "Read",
      request
    ) as Promise<ReadResponse>;
  }
  // Track an event, it will be created if it doesn't exist
  track(request: TrackRequest): Promise<TrackResponse> {
    return this.client.call(
      "analytics",
      "Track",
      request
    ) as Promise<TrackResponse>;
  }
}

export interface DeleteRequest {
  name?: string;
}

export interface DeleteResponse {
  event?: Event;
}

export interface Event {
  // time at which the event was created
  created?: string;
  // event name
  name?: string;
  // the amount of times the event was triggered
  value?: number;
}

export interface ListRequest {}

export interface ListResponse {
  events?: Event[];
}

export interface ReadRequest {
  name?: string;
}

export interface ReadResponse {
  event?: Event;
}

export interface TrackRequest {
  // event name
  name?: string;
}

export interface TrackResponse {}
