import * as m3o from '@m3o/m3o-node';

export class SmsService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Send an SMS.
  send(request: SmsSendRequest): Promise<SmsSendResponse> {
    return this.client.call('sms', 'Send', request) as Promise<SmsSendResponse>;
  }
}

export interface SmsSendRequest {
  // who is the message from? The message will be suffixed with "Sent from <from>"
  from?: string;
  // the main body of the message to send
  message?: string;
  // the destination phone number including the international dialling code (e.g. +44)
  to?: string;
}

export interface SmsSendResponse {
  // any additional info
  info?: string;
  // will return "ok" if successful
  status?: string;
}
