import * as m3o from "@m3o/m3o-node";

export class ContactService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  //
  create(request: CreateRequest): Promise<CreateResponse> {
    return this.client.call(
      "contact",
      "Create",
      request
    ) as Promise<CreateResponse>;
  }
  //
  delete(request: DeleteRequest): Promise<DeleteResponse> {
    return this.client.call(
      "contact",
      "Delete",
      request
    ) as Promise<DeleteResponse>;
  }
  //
  list(request: ListRequest): Promise<ListResponse> {
    return this.client.call(
      "contact",
      "List",
      request
    ) as Promise<ListResponse>;
  }
  //
  read(request: ReadRequest): Promise<ReadResponse> {
    return this.client.call(
      "contact",
      "Read",
      request
    ) as Promise<ReadResponse>;
  }
  //
  update(request: UpdateRequest): Promise<UpdateResponse> {
    return this.client.call(
      "contact",
      "Update",
      request
    ) as Promise<UpdateResponse>;
  }
}

export interface Address {
  // the label of the address
  label?: string;
  // the address location
  location?: string;
}

export interface ContactInfo {
  // the address
  addresses?: Address[];
  // the birthday
  birthday?: string;
  // create date string in RFC3339
  created_at?: string;
  // the emails
  emails?: Email[];
  // contact id
  id?: string;
  // the contact links
  links?: Link[];
  // the contact name
  name?: string;
  // note of the contact
  note?: string;
  // the phone numbers
  phones?: Phone[];
  // the social media username
  social_medias?: SocialMedia;
  // update date string in RFC3339
  updated_at?: string;
}

export interface CreateRequest {
  // optional, location
  addresses?: Address[];
  // optional, birthday
  birthday?: string;
  // optional, emails
  emails?: Email[];
  // optional, links
  links?: Link[];
  // required, the name of the contact
  name?: string;
  // optional, note of the contact
  note?: string;
  // optional, phone numbers
  phones?: Phone[];
  // optional, social media
  social_medias?: SocialMedia;
}

export interface CreateResponse {
  contact?: ContactInfo;
}

export interface DeleteRequest {
  // the id of the contact
  id?: string;
}

export interface DeleteResponse {}

export interface Email {
  // the email address
  address?: string;
  // the label of the email
  label?: string;
}

export interface Link {
  // the label of the link
  label?: string;
  // the url of the contact
  url?: string;
}

export interface ListRequest {
  // optional, default is 30
  limit?: number;
  // optional
  offset?: number;
}

export interface ListResponse {
  contacts?: ContactInfo[];
}

export interface Phone {
  // the label of the phone number
  label?: string;
  // phone number
  number?: string;
}

export interface ReadRequest {
  id?: string;
}

export interface ReadResponse {
  contact?: ContactInfo;
}

export interface SocialMedia {
  // the label of the social
  label?: string;
  // the username of social media
  username?: string;
}

export interface UpdateRequest {
  // optional, addresses
  addresses?: Address[];
  // optional, birthday
  birthday?: string;
  // optional, emails
  emails?: Email[];
  // required, the contact id
  id?: string;
  // optional, links
  links?: Link[];
  // required, the name
  name?: string;
  // optional, note
  note?: string;
  // optional, phone number
  phones?: Phone[];
  // optional, social media
  social_medias?: SocialMedia;
}

export interface UpdateResponse {
  contact?: ContactInfo;
}
