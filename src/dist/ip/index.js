import * as m3o from '@m3o/m3o-node';
var IpService = /** @class */ (function () {
  function IpService(token) {
    this.client = new m3o.Client({ token: token });
  }
  // Lookup the geolocation information for an IP address
  IpService.prototype.lookup = function (request) {
    return this.client.call('ip', 'Lookup', request);
  };
  return IpService;
})();
export { IpService };
