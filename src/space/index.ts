import * as m3o from "@m3o/m3o-node";

export class SpaceService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Create an object. Returns error if object with this name already exists. Max object size of 10MB, see Upload endpoint for larger objects. If you want to update an existing object use the `Update` endpoint
  create(request: CreateRequest): Promise<CreateResponse> {
    return this.client.call(
      "space",
      "Create",
      request
    ) as Promise<CreateResponse>;
  }
  // Delete an object from space
  delete(request: DeleteRequest): Promise<DeleteResponse> {
    return this.client.call(
      "space",
      "Delete",
      request
    ) as Promise<DeleteResponse>;
  }
  // Download an object via a presigned url
  download(request: DownloadRequest): Promise<DownloadResponse> {
    return this.client.call(
      "space",
      "Download",
      request
    ) as Promise<DownloadResponse>;
  }
  // Retrieve meta information about an object
  head(request: HeadRequest): Promise<HeadResponse> {
    return this.client.call("space", "Head", request) as Promise<HeadResponse>;
  }
  // List the objects in space
  list(request: ListRequest): Promise<ListResponse> {
    return this.client.call("space", "List", request) as Promise<ListResponse>;
  }
  // Read an object in space
  read(request: ReadRequest): Promise<ReadResponse> {
    return this.client.call("space", "Read", request) as Promise<ReadResponse>;
  }
  // Update an object. If an object with this name does not exist, creates a new one.
  update(request: UpdateRequest): Promise<UpdateResponse> {
    return this.client.call(
      "space",
      "Update",
      request
    ) as Promise<UpdateResponse>;
  }
  // Upload a large object (> 10MB). Returns a time limited presigned URL to be used for uploading the object
  upload(request: UploadRequest): Promise<UploadResponse> {
    return this.client.call(
      "space",
      "Upload",
      request
    ) as Promise<UploadResponse>;
  }
}

export interface CreateRequest {
  // The name of the object. Use forward slash delimiter to implement a nested directory-like structure e.g. images/foo.jpg
  name?: string;
  // The contents of the object. Either base64 encoded if sending request as application/json or raw bytes if using multipart/form-data format
  object?: string;
  // Who can see this object? "public" or "private", defaults to "private"
  visibility?: string;
}

export interface CreateResponse {
  // A public URL to access the object if visibility is "public"
  url?: string;
}

export interface DeleteRequest {
  // Name of the object
  name?: string;
}

export interface DeleteResponse {}

export interface DownloadRequest {
  // name of object
  name?: string;
}

export interface DownloadResponse {
  // presigned url
  url?: string;
}

export interface HeadObject {
  // when was this created
  created?: string;
  // when was this last modified
  modified?: string;
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
  created?: string;
  // when was this last modified
  modified?: string;
  name?: string;
  url?: string;
  visibility?: string;
}

export interface ListRequest {
  // optional prefix for the name e.g. to return all the objects in the images directory pass images/
  prefix?: string;
}

export interface ListResponse {
  objects?: ListObject[];
}

export interface Object {
  // when was this created
  created?: string;
  // the data within the object
  data?: string;
  // when was this last modified
  modified?: string;
  // name of object
  name?: string;
  // URL to access the object if it is public
  url?: string;
  // is this public or private
  visibility?: string;
}

export interface ReadRequest {
  // name of the object
  name?: string;
}

export interface ReadResponse {
  // The object itself
  object?: { [key: string]: any };
}

export interface UpdateRequest {
  // The name of the object. Use forward slash delimiter to implement a nested directory-like structure e.g. images/foo.jpg
  name?: string;
  // The contents of the object. Either base64 encoded if sending request as application/json or raw bytes if using multipart/form-data format
  object?: string;
  // Who can see this object? "public" or "private", defaults to "private"
  visibility?: string;
}

export interface UpdateResponse {
  // A public URL to access the object if visibility is "public"
  url?: string;
}

export interface UploadRequest {
  name?: string;
  // is this object public or private
  visibility?: string;
}

export interface UploadResponse {
  // a presigned url to be used for uploading. To use the URL call it with HTTP PUT and pass the object as the request data
  url?: string;
}
