import * as m3o from "@m3o/m3o-node";

export class ChatService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Create a new chat room
  create(request: CreateRequest): Promise<CreateResponse> {
    return this.client.call(
      "chat",
      "Create",
      request
    ) as Promise<CreateResponse>;
  }
  // Delete a chat room
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
  // Invite a user to a chat room
  invite(request: InviteRequest): Promise<InviteResponse> {
    return this.client.call(
      "chat",
      "Invite",
      request
    ) as Promise<InviteResponse>;
  }
  // Join a chat room
  join(request: JoinRequest): Promise<m3o.Stream<JoinRequest, JoinResponse>> {
    return this.client.stream("chat", "Join", request);
  }
  // Kick a user from a chat room
  kick(request: KickRequest): Promise<KickResponse> {
    return this.client.call("chat", "Kick", request) as Promise<KickResponse>;
  }
  // Leave a chat room
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
  // optional list of user ids
  user_ids?: string[];
  // chat description
  description?: string;
  // name of the room
  name?: string;
  // whether its a private room
  private?: boolean;
}

export interface CreateResponse {
  // the unique chat room
  room?: Room;
}

export interface DeleteRequest {
  // the chat room id to delete
  room_id?: string;
}

export interface DeleteResponse {
  room?: Room;
}

export interface HistoryRequest {
  // the chat room id to get
  room_id?: string;
}

export interface HistoryResponse {
  // messages in the chat room
  messages?: Message[];
}

export interface InviteRequest {
  // the room id
  room_id?: string;
  // the user id
  user_id?: string;
}

export interface InviteResponse {
  room?: Room;
}

export interface JoinRequest {
  // chat room to join
  room_id?: string;
  // user id joining
  user_id?: string;
}

export interface JoinResponse {
  message?: Message;
}

export interface KickRequest {
  // the chat room id
  room_id?: string;
  // the user id
  user_id?: string;
}

export interface KickResponse {
  room?: Room;
}

export interface LeaveRequest {
  // the chat room id
  room_id?: string;
  // the user id
  user_id?: string;
}

export interface LeaveResponse {
  room?: Room;
}

export interface ListRequest {
  // optional user id to filter by
  user_id?: string;
}

export interface ListResponse {
  rooms?: Room[];
}

export interface Message {
  // a client side id, should be validated by the server to make the request retry safe
  client?: string;
  // id of the message, allocated by the server
  id?: string;
  // id of the chat the message is being sent to / from
  room_id?: string;
  // time the message was sent in RFC3339 format
  sent_at?: string;
  // subject of the message
  subject?: string;
  // text of the message
  text?: string;
  // id of the user who sent the message
  user_id?: string;
}

export interface Room {
  // time of creation
  created_at?: string;
  // description of the that
  description?: string;
  // unique room id
  id?: string;
  // name of the chat
  name?: string;
  // whether its a private room
  private?: boolean;
  // list of users
  user_ids?: string[];
}

export interface SendRequest {
  // subject of the message
  subject?: string;
  // text of the message
  text?: string;
  // id of the user who sent the message
  user_id?: string;
  // a client side id, should be validated by the server to make the request retry safe
  client?: string;
  // id of the chat room the message is being sent to / from
  room_id?: string;
}

export interface SendResponse {
  // the message which was created
  message?: Message;
}
