import * as m3o from '@m3o/m3o-node';
var GeocodingService = /** @class */ (function () {
  function GeocodingService(token) {
    this.client = new m3o.Client({ token: token });
  }
  // Lookup returns a geocoded address including normalized address and gps coordinates. All fields are optional, provide more to get more accurate results
  GeocodingService.prototype.lookup = function (request) {
    return this.client.call('geocoding', 'Lookup', request);
  };
  // Reverse lookup an address from gps coordinates
  GeocodingService.prototype.reverse = function (request) {
    return this.client.call('geocoding', 'Reverse', request);
  };
  return GeocodingService;
})();
export { GeocodingService };
