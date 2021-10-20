import * as m3o from '@m3o/m3o-node';
var CryptoService = /** @class */ (function () {
  function CryptoService(token) {
    this.client = new m3o.Client({ token: token });
  }
  // Returns the history for the previous close
  CryptoService.prototype.history = function (request) {
    return this.client.call('crypto', 'History', request);
  };
  // Get news related to a currency
  CryptoService.prototype.news = function (request) {
    return this.client.call('crypto', 'News', request);
  };
  // Get the last price for a given crypto ticker
  CryptoService.prototype.price = function (request) {
    return this.client.call('crypto', 'Price', request);
  };
  // Get the last quote for a given crypto ticker
  CryptoService.prototype.quote = function (request) {
    return this.client.call('crypto', 'Quote', request);
  };
  return CryptoService;
})();
export { CryptoService };
