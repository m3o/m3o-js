import * as m3o from '@m3o/m3o-node';
var ForexService = /** @class */ (function () {
  function ForexService(token) {
    this.client = new m3o.Client({ token: token });
  }
  // Returns the data for the previous close
  ForexService.prototype.history = function (request) {
    return this.client.call('forex', 'History', request);
  };
  // Get the latest price for a given forex ticker
  ForexService.prototype.price = function (request) {
    return this.client.call('forex', 'Price', request);
  };
  // Get the latest quote for the forex
  ForexService.prototype.quote = function (request) {
    return this.client.call('forex', 'Quote', request);
  };
  return ForexService;
})();
export { ForexService };
