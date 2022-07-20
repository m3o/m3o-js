import * as m3o from "@m3o/m3o-node";

export class ChatService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Create a new group
  create(request: CreateRequest): Promise<CreateResponse> {
    return this.client.call(
      "chat",
      "Create",
      request
    ) as Promise<CreateResponse>;
  }
  // Delete a group
  delete(request: DeleteRequest): Promise<DeleteResponse> {
    return this.client.call(
      "chat",
      "Delete",
      request
    ) as Promise<DeleteResponse>;
  }
  // List the messages in a chat
  history(request: HistoryRequest): Promise<HistoryResponse> {
    return this.client.call(
      "chat",
      "History",
      request
    ) as Promise<HistoryResponse>;
  }
  // Invite a user to a group
  invite(request: InviteRequest): Promise<InviteResponse> {
    return this.client.call(
      "chat",
      "Invite",
      request
    ) as Promise<InviteResponse>;
  }
  // Join a group
  join(request: JoinRequest): Promise<m3o.Stream<JoinRequest, JoinResponse>> {
    return this.client.stream("chat", "Join", request);
  }
  // Kick a user from a group
  kick(request: KickRequest): Promise<KickResponse> {
    return this.client.call("chat", "Kick", request) as Promise<KickResponse>;
  }
  // Leave a group
  leave(request: LeaveRequest): Promise<LeaveResponse> {
    return this.client.call("chat", "Leave", request) as Promise<LeaveResponse>;
  }
  // List available chats
  list(request: ListRequest): Promise<ListResponse> {
    return this.client.call("chat", "List", request) as Promise<ListResponse>;
  }
  // Connect to a chat to receive a stream of messages
  // Send a message to a chat
  send(request: SendRequest): Promise<SendResponse> {
    return this.client.call("chat", "Send", request) as Promise<SendResponse>;
  }
}

export interface CreateRequest {
  // chat description
  description?: string;
  // name of the group
  name?: string;
  // whether its a private group
  private?: boolean;
  // optional list of user ids
  user_ids?: string[];
}

export interface CreateResponse {
  // the unique group
  group?: { [key: string]: any };
}

export interface DeleteRequest {
  // the group id to delete
  group_id?: string;
}

export interface DeleteResponse {
  group?: { [key: string]: any };
}

export interface Group {
  // time of creation
  created_at?: string;
  // description of the that
  description?: string;
  // unique group id
  id?: string;
  // name of the chat
  name?: string;
  // whether its a private group
  private?: boolean;
  // list of users
  user_ids?: string[];
}

export interface HistoryRequest {
  // the group id to get
  group_id?: string;
}

export interface HistoryResponse {
  // messages in the group
  messages?: Message[];
}

export interface InviteRequest {
  // the group id
  group_id?: string;
  // the user id
  user_id?: string;
}

export interface InviteResponse {
  group?: { [key: string]: any };
}

export interface JoinRequest {
  // group to join
  group_id?: string;
  // user id joining
  user_id?: string;
}

export interface JoinResponse {
  message?: { [key: string]: any };
}

export interface KickRequest {
  // the group id
  group_id?: string;
  // the user id
  user_id?: string;
}

export interface KickResponse {
  group?: { [key: string]: any };
}

export interface LeaveRequest {
  // the group id
  group_id?: string;
  // the user id
  user_id?: string;
}

export interface LeaveResponse {
  group?: { [key: string]: any };
}

export interface ListRequest {
  // optional user id to filter by
  user_id?: string;
}

export interface ListResponse {
  groups?: Group[];
}

export interface Message {
  // a client side id, should be validated by the server to make the request retry safe
  client?: string;
  // id of the chat the message is being sent to / from
  group_id?: string;
  // id of the message, allocated by the server
  id?: string;
  // time the message was sent in RFC3339 format
  sent_at?: string;
  // subject of the message
  subject?: string;
  // text of the message
  text?: string;
  // id of the user who sent the message
  user_id?: string;
}

export interface SendRequest {
  // a client side id, should be validated by the server to make the request retry safe
  client?: string;
  // id of the group the message is being sent to / from
  group_id?: string;
  // subject of the message
  subject?: string;
  // text of the message
  text?: string;
  // id of the user who sent the message
  user_id?: string;
}

export interface SendResponse {
  // the message which was created
  message?: { [key: string]: any };
}
