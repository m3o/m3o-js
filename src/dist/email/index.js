import * as m3o from '@m3o/m3o-node';
var EmailService = /** @class */ (function () {
  function EmailService(token) {
    this.client = new m3o.Client({ token: token });
  }
  // Send an email by passing in from, to, subject, and a text or html body
  EmailService.prototype.send = function (request) {
    return this.client.call('email', 'Send', request);
  };
  return EmailService;
})();
export { EmailService };
