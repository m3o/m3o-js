import * as m3o from '@m3o/m3o-node';
var WeatherService = /** @class */ (function () {
  function WeatherService(token) {
    this.client = new m3o.Client({ token: token });
  }
  // Get the weather forecast for the next 1-10 days
  WeatherService.prototype.forecast = function (request) {
    return this.client.call('weather', 'Forecast', request);
  };
  // Get the current weather report for a location by postcode, city, zip code, ip address
  WeatherService.prototype.now = function (request) {
    return this.client.call('weather', 'Now', request);
  };
  return WeatherService;
})();
export { WeatherService };
