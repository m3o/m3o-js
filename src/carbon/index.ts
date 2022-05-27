import * as m3o from "@m3o/m3o-node";

export class CarbonService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Purchase 1KG (0.001 tonne) of carbon offsets in a single request
  offset(request: OffsetRequest): Promise<OffsetResponse> {
    return this.client.call(
      "carbon",
      "Offset",
      request
    ) as Promise<OffsetResponse>;
  }
}

export interface OffsetRequest {}

export interface OffsetResponse {
  // projects it was allocated to
  projects?: Project[];
  // number of tonnes
  tonnes?: number;
  // number of units purchased
  units?: number;
  // the metric used e.g KG or Tonnes
  metric?: string;
}

export interface Project {
  // name of the project
  name?: string;
  // percentage that went to this
  percentage?: number;
  // amount in tonnes
  tonnes?: number;
}
