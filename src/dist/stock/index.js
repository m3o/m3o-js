import * as m3o from '@m3o/m3o-node';
var StockService = /** @class */ (function () {
  function StockService(token) {
    this.client = new m3o.Client({ token: token });
  }
  // Get the historic open-close for a given day
  StockService.prototype.history = function (request) {
    return this.client.call('stock', 'History', request);
  };
  // Get the historic order book and each trade by timestamp
  StockService.prototype.orderBook = function (request) {
    return this.client.call('stock', 'OrderBook', request);
  };
  // Get the last price for a given stock ticker
  StockService.prototype.price = function (request) {
    return this.client.call('stock', 'Price', request);
  };
  // Get the last quote for the stock
  StockService.prototype.quote = function (request) {
    return this.client.call('stock', 'Quote', request);
  };
  return StockService;
})();
export { StockService };
