import * as m3o from '@m3o/m3o-node';
var TimeService = /** @class */ (function () {
  function TimeService(token) {
    this.client = new m3o.Client({ token: token });
  }
  // Get the current time
  TimeService.prototype.now = function (request) {
    return this.client.call('time', 'Now', request);
  };
  // Get the timezone info for a specific location
  TimeService.prototype.zone = function (request) {
    return this.client.call('time', 'Zone', request);
  };
  return TimeService;
})();
export { TimeService };
