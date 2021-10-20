import * as m3o from '@m3o/m3o-node';
var SmsService = /** @class */ (function () {
  function SmsService(token) {
    this.client = new m3o.Client({ token: token });
  }
  // Send an SMS.
  SmsService.prototype.send = function (request) {
    return this.client.call('sms', 'Send', request);
  };
  return SmsService;
})();
export { SmsService };
