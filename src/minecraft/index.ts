import * as m3o from "@m3o/m3o-node";

export class MinecraftService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Ping a minecraft server
  ping(request: PingRequest): Promise<PingResponse> {
    return this.client.call(
      "minecraft",
      "Ping",
      request
    ) as Promise<PingResponse>;
  }
}

export interface PingRequest {
  // address of the server
  address?: string;
}

export interface PingResponse {
  // Latency (ms) between us and the server (EU)
  latency?: number;
  // Max players ever
  max_players?: number;
  // Message of the day
  motd?: string;
  // Number of players online
  players?: number;
  // Protocol number of the server
  protocol?: number;
  // List of connected players
  sample?: PlayerSample[];
  // Version of the server
  version?: string;
  // Favicon in base64
  favicon?: string;
}

export interface PlayerSample {
  // unique id of player
  uuid?: string;
  // name of the player
  name?: string;
}
