import * as m3o from "@m3o/m3o-node";

export class AppService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Delete an app
  delete(request: DeleteRequest): Promise<DeleteResponse> {
    return this.client.call(
      "app",
      "Delete",
      request
    ) as Promise<DeleteResponse>;
  }
  // Get an app by name
  get(request: GetRequest): Promise<GetResponse> {
    return this.client.call("app", "Get", request) as Promise<GetResponse>;
  }
  // List all the apps
  list(request: ListRequest): Promise<ListResponse> {
    return this.client.call("app", "List", request) as Promise<ListResponse>;
  }
  // Get the logs for an app
  logs(request: LogsRequest): Promise<LogsResponse> {
    return this.client.call("app", "Logs", request) as Promise<LogsResponse>;
  }
  // Return the support regions
  regions(request: RegionsRequest): Promise<RegionsResponse> {
    return this.client.call(
      "app",
      "Regions",
      request
    ) as Promise<RegionsResponse>;
  }
  // Reserve app names
  reserve(request: ReserveRequest): Promise<ReserveResponse> {
    return this.client.call(
      "app",
      "Reserve",
      request
    ) as Promise<ReserveResponse>;
  }
  // Resolve an app by id to its raw backend endpoint
  resolve(request: ResolveRequest): Promise<ResolveResponse> {
    return this.client.call(
      "app",
      "Resolve",
      request
    ) as Promise<ResolveResponse>;
  }
  // Run an app from source
  run(request: RunRequest): Promise<RunResponse> {
    return this.client.call("app", "Run", request) as Promise<RunResponse>;
  }
  // Get the status of an app
  status(request: StatusRequest): Promise<StatusResponse> {
    return this.client.call(
      "app",
      "Status",
      request
    ) as Promise<StatusResponse>;
  }
  // Update the app. The latest source code will be downloaded, built and deployed.
  update(request: UpdateRequest): Promise<UpdateResponse> {
    return this.client.call(
      "app",
      "Update",
      request
    ) as Promise<UpdateResponse>;
  }
}

export interface DeleteRequest {
  // name of the app
  name?: string;
}

export interface DeleteResponse {}

export interface GetRequest {
  name?: string;
}

export interface GetResponse {
  service?: { [key: string]: any };
}

export interface ListRequest {}

export interface ListResponse {
  // all the apps
  services?: Service[];
}

export interface LogsRequest {
  // type of logs to retrieve, currently supported options - "build"
  logs_type?: string;
  // name of the app
  name?: string;
}

export interface LogsResponse {
  logs?: string;
}

export interface RegionsRequest {}

export interface RegionsResponse {
  regions?: string[];
}

export interface Reservation {
  // time of reservation
  created?: string;
  // time reservation expires
  expires?: string;
  // name of the app
  name?: string;
  // owner id
  owner?: string;
  // associated token
  token?: string;
}

export interface ReserveRequest {
  // name of your app e.g helloworld
  name?: string;
}

export interface ReserveResponse {
  // The app reservation
  reservation?: { [key: string]: any };
}

export interface ResolveRequest {
  // the service id
  id?: string;
}

export interface ResolveResponse {
  // the end provider url
  url?: string;
}

export interface RunRequest {
  // branch. defaults to master
  branch?: string;
  // associated env vars to pass in
  env_vars?: { [key: string]: string };
  // name of the app
  name?: string;
  // port to run on
  port?: number;
  // region to run in
  region?: string;
  // source repository
  repo?: string;
}

export interface RunResponse {
  // The running service
  service?: { [key: string]: any };
}

export interface Service {
  // raw backend endpoint
  backend?: string;
  // branch of code
  branch?: string;
  // time of creation
  created?: string;
  // custom domains
  custom_domains?: string[];
  // associated env vars
  env_vars?: { [key: string]: string };
  // unique id
  id?: string;
  // name of the app
  name?: string;
  // port running on
  port?: number;
  // region running in
  region?: string;
  // source repository
  repo?: string;
  // status of the app
  status?: string;
  // last updated
  updated?: string;
  // app url
  url?: string;
}

export interface StatusRequest {
  // name of the app
  name?: string;
}

export interface StatusResponse {
  // running service info
  service?: { [key: string]: any };
}

export interface UpdateRequest {
  // Additional env vars to update
  env_vars?: { [key: string]: string };
  // name of the app
  name?: string;
}

export interface UpdateResponse {}
