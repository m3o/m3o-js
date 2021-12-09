import * as m3o from "@m3o/m3o-node";

export class SpaceService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Create an object. Returns error if object with this name already exists. If you want to update an existing object use the `Update` endpoint
  // You need to send the request as a multipart/form-data rather than the usual application/json
  // with each parameter as a form field.
  create(request: CreateRequest): Promise<CreateResponse> {
    return this.client.call(
      "space",
      "Create",
      request
    ) as Promise<CreateResponse>;
  }
  // Delete an object
  delete(request: DeleteRequest): Promise<DeleteResponse> {
    return this.client.call(
      "space",
      "Delete",
      request
    ) as Promise<DeleteResponse>;
  }
  // Retrieve meta information about an object
  head(request: HeadRequest): Promise<HeadResponse> {
    return this.client.call("space", "Head", request) as Promise<HeadResponse>;
  }
  // List the objects in the space
  list(request: ListRequest): Promise<ListResponse> {
    return this.client.call("space", "List", request) as Promise<ListResponse>;
  }
  // Read an object in storage. Use for private objects.
  read(request: ReadRequest): Promise<ReadResponse> {
    return this.client.call("space", "Read", request) as Promise<ReadResponse>;
  }
  // Update an object. If an object with this name does not exist, creates a new one.
  // You need to send the request as a multipart/form-data rather than the usual application/json
  // with each parameter as a form field.
  update(request: UpdateRequest): Promise<UpdateResponse> {
    return this.client.call(
      "space",
      "Update",
      request
    ) as Promise<UpdateResponse>;
  }
}

export interface CreateRequest {
  // The name of the object. Use forward slash delimiter to implement a nested directory-like structure e.g. images/foo.jpg
  name?: string;
  // The contents of the object
  object?: string;
  // Who can see this object? "public" or "private", defaults to "private"
  visibility?: string;
}

export interface CreateResponse {
  // A public URL to access the object if visibility is "public"
  url?: string;
}

export interface DeleteRequest {
  // The name of the object. Use forward slash delimiter to implement a nested directory-like structure e.g. images/foo.jpg
  name?: string;
}

export interface DeleteResponse {}

export interface HeadObject {
  // when was this created
  created?: number;
  // when was this last modified
  modified?: number;
  name?: string;
  // URL to access the object if it is public
  url?: string;
  // is this public or private
  visibility?: string;
}

export interface HeadRequest {
  // name of the object
  name?: string;
}

export interface HeadResponse {
  object?: HeadObject;
}

export interface ListObject {
  // when was this last modified
  modified?: number;
  name?: string;
  url?: string;
}

export interface ListRequest {
  // optional prefix for the name e.g. to return all the objects in the images directory pass images/
  prefix?: string;
}

export interface ListResponse {
  objects?: ListObject[];
}

export interface ReadRequest {
  // name of the object
  name?: string;
}

export interface ReadResponse {
  // Returns the response as raw data
  object?: string;
}

export interface UpdateRequest {
  // The name of the object. Use forward slash delimiter to implement a nested directory-like structure e.g. images/foo.jpg
  name?: string;
  // The contents of the object
  object?: string;
  // Who can see this object? "public" or "private", defaults to "private"
  visibility?: string;
}

export interface UpdateResponse {
  // A public URL to access the object if visibility is "public"
  url?: string;
}
