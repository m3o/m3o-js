import * as m3o from '@m3o/m3o-node';
var OtpService = /** @class */ (function () {
  function OtpService(token) {
    this.client = new m3o.Client({ token: token });
  }
  // Generate an OTP (one time pass) code
  OtpService.prototype.generate = function (request) {
    return this.client.call('otp', 'Generate', request);
  };
  // Validate the OTP code
  OtpService.prototype.validate = function (request) {
    return this.client.call('otp', 'Validate', request);
  };
  return OtpService;
})();
export { OtpService };
