import * as m3o from "@m3o/m3o-node";

export class FunctionService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Call a function by name
  call(request: CallRequest): Promise<CallResponse> {
    return this.client.call(
      "function",
      "Call",
      request
    ) as Promise<CallResponse>;
  }
  // Delete a function by name
  delete(request: DeleteRequest): Promise<DeleteResponse> {
    return this.client.call(
      "function",
      "Delete",
      request
    ) as Promise<DeleteResponse>;
  }
  // Deploy a group of functions
  deploy(request: DeployRequest): Promise<DeployResponse> {
    return this.client.call(
      "function",
      "Deploy",
      request
    ) as Promise<DeployResponse>;
  }
  // Get the info for a deployed function
  describe(request: DescribeRequest): Promise<DescribeResponse> {
    return this.client.call(
      "function",
      "Describe",
      request
    ) as Promise<DescribeResponse>;
  }
  // List all the deployed functions
  list(request: ListRequest): Promise<ListResponse> {
    return this.client.call(
      "function",
      "List",
      request
    ) as Promise<ListResponse>;
  }
  // Return the backend url for proxying
  proxy(request: ProxyRequest): Promise<ProxyResponse> {
    return this.client.call(
      "function",
      "Proxy",
      request
    ) as Promise<ProxyResponse>;
  }
  // Return a list of supported regions
  regions(request: RegionsRequest): Promise<RegionsResponse> {
    return this.client.call(
      "function",
      "Regions",
      request
    ) as Promise<RegionsResponse>;
  }
  // Reserve function names and resources beyond free quota
  reserve(request: ReserveRequest): Promise<ReserveResponse> {
    return this.client.call(
      "function",
      "Reserve",
      request
    ) as Promise<ReserveResponse>;
  }
  // Update a function. Downloads the source, builds and redeploys
  update(request: UpdateRequest): Promise<UpdateResponse> {
    return this.client.call(
      "function",
      "Update",
      request
    ) as Promise<UpdateResponse>;
  }
}

export interface CallRequest {
  // Name of the function
  name?: string;
  // Request body that will be passed to the function
  request?: { [key: string]: any };
}

export interface CallResponse {
  // Response body that the function returned
  response?: { [key: string]: any };
}

export interface DeleteRequest {
  // The name of the function
  name?: string;
}

export interface DeleteResponse {}

export interface DeployRequest {
  // branch to deploy. defaults to master
  branch?: string;
  // entry point, ie. handler name in the source code
  // if not provided, defaults to the name parameter
  entrypoint?: string;
  // environment variables to pass in at runtime
  env_vars?: { [key: string]: string };
  // function name
  name?: string;
  // region to deploy in. defaults to europe-west1
  region?: string;
  // github url to repo
  repo?: string;
  // runtime/lanaguage of the function e.g php74,
  // nodejs6, nodejs8, nodejs10, nodejs12, nodejs14, nodejs16,
  // dotnet3, java11, ruby26, ruby27, go111, go113, go116,
  // python37, python38, python39
  runtime?: string;
  // optional subfolder path
  subfolder?: string;
}

export interface DeployResponse {
  function?: Func;
}

export interface DescribeRequest {
  // The name of the function
  name?: string;
}

export interface DescribeResponse {
  // The function requested
  function?: Func;
}

export interface Func {
  // branch to deploy. defaults to master
  branch?: string;
  // time of creation
  created?: string;
  // name of handler in source code
  entrypoint?: string;
  // associated env vars
  env_vars?: { [key: string]: string };
  // id of the function
  id?: string;
  // function name
  // limitation: must be unique across projects
  name?: string;
  // region to deploy in. defaults to europe-west1
  region?: string;
  // git repo address
  repo?: string;
  // runtime/language of the function e.g php74,
  // nodejs6, nodejs8, nodejs10, nodejs12, nodejs14, nodejs16,
  // dotnet3, java11, ruby26, ruby27, go111, go113, go116,
  // python37, python38, python39
  runtime?: string;
  // eg. ACTIVE, DEPLOY_IN_PROGRESS, OFFLINE etc
  status?: string;
  // subfolder path to entrypoint
  subfolder?: string;
  // time it was updated
  updated?: string;
  // unique url of the function
  url?: string;
}

export interface ListRequest {}

export interface ListResponse {
  // List of functions deployed
  functions?: Func[];
}

export interface ProxyRequest {
  // id of the function
  id?: string;
}

export interface ProxyResponse {
  // backend url
  url?: string;
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

export interface UpdateRequest {
  // function name
  name?: string;
}

export interface UpdateResponse {}
