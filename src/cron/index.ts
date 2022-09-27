import * as m3o from "@m3o/m3o-node";

export class CronService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Delete a cron job
  delete(request: DeleteRequest): Promise<DeleteResponse> {
    return this.client.call(
      "cron",
      "Delete",
      request
    ) as Promise<DeleteResponse>;
  }
  // List all cron jobs
  jobs(request: JobsRequest): Promise<JobsResponse> {
    return this.client.call("cron", "Jobs", request) as Promise<JobsResponse>;
  }
  // Schedule a cron job
  schedule(request: ScheduleRequest): Promise<ScheduleResponse> {
    return this.client.call(
      "cron",
      "Schedule",
      request
    ) as Promise<ScheduleResponse>;
  }
}

export interface DeleteRequest {
  // id of the cron job
  id?: string;
}

export interface DeleteResponse {}

export interface Job {
  // callback url e.g https://google.com
  callback?: string;
  // description
  description?: string;
  // job id
  id?: string;
  // scheduled interval
  interval?: string;
  // name
  name?: string;
}

export interface JobsRequest {}

export interface JobsResponse {
  jobs?: Job[];
}

export interface ScheduleRequest {
  // callback url e.g https://google.com
  callback?: string;
  // description
  description?: string;
  // unique id of job (optional)
  id?: string;
  // interval e.g * * * * *
  interval?: string;
  // name of cron
  name?: string;
}

export interface ScheduleResponse {
  // the scheduled job
  job?: { [key: string]: any };
}
