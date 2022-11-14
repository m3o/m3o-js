import * as m3o from "@m3o/m3o-node";

export class DnsService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Query an addresss
  query(request: QueryRequest): Promise<QueryResponse> {
    return this.client.call("dns", "Query", request) as Promise<QueryResponse>;
  }
  // Check who owns a domain
  whois(request: WhoisRequest): Promise<WhoisResponse> {
    return this.client.call("dns", "Whois", request) as Promise<WhoisResponse>;
  }
}

export interface Answer {
  // time to live
  TTL?: number;
  // the answer
  data?: string;
  // name resolved
  name?: string;
  // type of record
  type?: number;
}

export interface Domain {
  // domain id
  id?: string;
}

export interface QueryRequest {
  // name to resolve
  name?: string;
  // type of query e.g A, AAAA, MX, SRV
  type?: string;
}

export interface QueryResponse {
  AD?: boolean;
  CD?: boolean;
  RA?: boolean;
  RD?: boolean;
  TC?: boolean;
  answer?: { [key: string]: any }[];
  provider?: string;
  question?: { [key: string]: any }[];
  status?: number;
}

export interface Question {
  // name to query
  name?: string;
  // type of record
  type?: number;
}

export interface WhoisRequest {
  domain?: string;
}

export interface WhoisResponse {
  // abuse email
  abuse_email?: string;
  // abuse phone
  abuse_phone?: string;
  // time of creation
  created?: string;
  // domain name
  domain?: string;
  // time of expiry
  expiry?: string;
  // domain id
  id?: string;
  // nameservers
  nameservers?: string[];
  // the registrar
  registrar?: string;
  // the registrar iana id
  registrar_id?: string;
  // registrar
  registrar_url?: string;
  // status of domain
  status?: string[];
  // time of update
  updated?: string;
  // whois server
  whois_server?: string;
}
