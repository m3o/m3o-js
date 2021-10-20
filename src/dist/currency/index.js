import * as m3o from '@m3o/m3o-node';
var CurrencyService = /** @class */ (function () {
  function CurrencyService(token) {
    this.client = new m3o.Client({ token: token });
  }
  // Codes returns the supported currency codes for the API
  CurrencyService.prototype.codes = function (request) {
    return this.client.call('currency', 'Codes', request);
  };
  // Convert returns the currency conversion rate between two pairs e.g USD/GBP
  CurrencyService.prototype.convert = function (request) {
    return this.client.call('currency', 'Convert', request);
  };
  // Returns the historic rates for a currency on a given date
  CurrencyService.prototype.history = function (request) {
    return this.client.call('currency', 'History', request);
  };
  // Rates returns the currency rates for a given code e.g USD
  CurrencyService.prototype.rates = function (request) {
    return this.client.call('currency', 'Rates', request);
  };
  return CurrencyService;
})();
export { CurrencyService };
