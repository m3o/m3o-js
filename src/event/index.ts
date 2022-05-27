import * as m3o from "@m3o/m3o-node";

export class EventService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Consume events from a given topic.
  consume(
    request: ConsumeRequest
  ): Promise<m3o.Stream<ConsumeRequest, ConsumeResponse>> {
    return this.client.stream("event", "Consume", request);
  }
  // Publish a event to the event stream.
  publish(request: PublishRequest): Promise<PublishResponse> {
    return this.client.call(
      "event",
      "Publish",
      request
    ) as Promise<PublishResponse>;
  }
  // Read stored events
  read(request: ReadRequest): Promise<ReadResponse> {
    return this.client.call("event", "Read", request) as Promise<ReadResponse>;
  }
}

export interface ConsumeRequest {
  // Optional group for the subscription
  group?: string;
  // Optional offset to read from e.g "2006-01-02T15:04:05.999Z07:00"
  offset?: string;
  // The topic to subscribe to
  topic?: string;
}

export interface ConsumeResponse {
  // Unique message id
  id?: string;
  // The next json message on the topic
  message?: { [key: string]: any };
  // Timestamp of publishing
  timestamp?: string;
  // The topic subscribed to
  topic?: string;
}

export interface Ev {
  // event timestamp
  timestamp?: string;
  // event id
  id?: string;
  // event message
  message?: { [key: string]: any };
}

export interface PublishRequest {
  // The json message to publish
  message?: { [key: string]: any };
  // The topic to publish to
  topic?: string;
}

export interface PublishResponse {}

export interface ReadRequest {
  // number of events to read; default 25
  limit?: number;
  // offset for the events; default 0
  offset?: number;
  // topic to read from
  topic?: string;
}

export interface ReadResponse {
  // the events
  events?: Ev[];
}
