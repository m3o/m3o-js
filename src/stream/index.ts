import * as m3o from "@m3o/m3o-node";

export class StreamService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Create a channel with a given name and description. Channels are created automatically but
  // this allows you to specify a description that's persisted for the lifetime of the channel.
  createChannel(request: CreateChannelRequest): Promise<CreateChannelResponse> {
    return this.client.call(
      "stream",
      "CreateChannel",
      request
    ) as Promise<CreateChannelResponse>;
  }
  // List all the active channels
  listChannels(request: ListChannelsRequest): Promise<ListChannelsResponse> {
    return this.client.call(
      "stream",
      "ListChannels",
      request
    ) as Promise<ListChannelsResponse>;
  }
  // List messages for a given channel
  listMessages(request: ListMessagesRequest): Promise<ListMessagesResponse> {
    return this.client.call(
      "stream",
      "ListMessages",
      request
    ) as Promise<ListMessagesResponse>;
  }
  // Send a message to the stream.
  sendMessage(request: SendMessageRequest): Promise<SendMessageResponse> {
    return this.client.call(
      "stream",
      "SendMessage",
      request
    ) as Promise<SendMessageResponse>;
  }
}

export interface Channel {
  // description for the channel
  description?: string;
  // last activity time
  last_active?: string;
  // name of the channel
  name?: string;
}

export interface CreateChannelRequest {
  // description for the channel
  description?: string;
  // name of the channel
  name?: string;
}

export interface CreateChannelResponse {}

export interface ListChannelsRequest {}

export interface ListChannelsResponse {
  channels?: Channel[];
}

export interface ListMessagesRequest {
  // The channel to subscribe to
  channel?: string;
  // number of message to return
  limit?: number;
}

export interface ListMessagesResponse {
  // The channel subscribed to
  channel?: string;
  // Messages are chronological order
  messages?: Message[];
}

export interface Message {
  // the channel name
  channel?: string;
  // id of the message
  id?: string;
  // the associated metadata
  metadata?: { [key: string]: string };
  // text of the message
  text?: string;
  // time of message creation
  timestamp?: string;
}

export interface SendMessageRequest {
  // The channel to send to
  channel?: string;
  // The message text to send
  text?: string;
}

export interface SendMessageResponse {}
