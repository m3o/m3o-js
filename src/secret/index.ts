import * as m3o from '@m3o/m3o-node'

export class SecretService {
  private client: m3o.Client

  constructor(token: string) {
    this.client = new m3o.Client({ token: token })
  }
  // Delete a secret. If key not found a success response is returned.
  delete(request: DeleteRequest): Promise<DeleteResponse> {
    return this.client.call(
      'secret',
      'Delete',
      request
    ) as Promise<DeleteResponse>
  }
  // Get a secret by key.
  get(request: GetRequest): Promise<GetResponse> {
    return this.client.call('secret', 'Get', request) as Promise<GetResponse>
  }
  // List all the available secrets
  list(request: ListRequest): Promise<ListResponse> {
    return this.client.call('secret', 'List', request) as Promise<ListResponse>
  }
  // Set a secret. Overwrites any existing value already set.
  set(request: SetRequest): Promise<SetResponse> {
    return this.client.call('secret', 'Set', request) as Promise<SetResponse>
  }
}

export interface DeleteRequest {
  // The key to delete
  key?: string
  // Optional path
  path?: string
}

export interface DeleteResponse {}

export interface GetRequest {
  // The key to retrieve
  key?: string
  // Optional path
  path?: string
}

export interface GetResponse {
  // time of creation
  created?: string
  // The key e.g foo
  key?: string
  // Path of value e.g bar/baz
  path?: string
  // time of update
  updated?: string
  // The value e.g cat
  value?: string
}

export interface ListRequest {}

export interface ListResponse {
  keys?: string[]
}

export interface SetRequest {
  // The key to update
  key?: string
  // Optional path e.g bar/baz
  path?: string
  // The value to set
  value?: string
}

export interface SetResponse {}
