import * as m3o from '@m3o/m3o-node';
var LocationService = /** @class */ (function () {
  function LocationService(token) {
    this.client = new m3o.Client({ token: token });
  }
  // Read an entity by its ID
  LocationService.prototype.read = function (request) {
    return this.client.call('location', 'Read', request);
  };
  // Save an entity's current position
  LocationService.prototype.save = function (request) {
    return this.client.call('location', 'Save', request);
  };
  // Search for entities in a given radius
  LocationService.prototype.search = function (request) {
    return this.client.call('location', 'Search', request);
  };
  return LocationService;
})();
export { LocationService };
