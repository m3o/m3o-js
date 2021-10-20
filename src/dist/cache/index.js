import * as m3o from '@m3o/m3o-node';
var CacheService = /** @class */ (function () {
  function CacheService(token) {
    this.client = new m3o.Client({ token: token });
  }
  // Decrement a value (if it's a number)
  CacheService.prototype.decrement = function (request) {
    return this.client.call('cache', 'Decrement', request);
  };
  // Delete a value from the cache
  CacheService.prototype.delete = function (request) {
    return this.client.call('cache', 'Delete', request);
  };
  // Get an item from the cache by key
  CacheService.prototype.get = function (request) {
    return this.client.call('cache', 'Get', request);
  };
  // Increment a value (if it's a number)
  CacheService.prototype.increment = function (request) {
    return this.client.call('cache', 'Increment', request);
  };
  // Set an item in the cache. Overwrites any existing value already set.
  CacheService.prototype.set = function (request) {
    return this.client.call('cache', 'Set', request);
  };
  return CacheService;
})();
export { CacheService };
