import * as m3o from '@m3o/m3o-node';
var RoutingService = /** @class */ (function () {
  function RoutingService(token) {
    this.client = new m3o.Client({ token: token });
  }
  // Turn by turn directions from a start point to an end point including maneuvers and bearings
  RoutingService.prototype.directions = function (request) {
    return this.client.call('routing', 'Directions', request);
  };
  // Get the eta for a route from origin to destination. The eta is an estimated time based on car routes
  RoutingService.prototype.eta = function (request) {
    return this.client.call('routing', 'Eta', request);
  };
  // Retrieve a route as a simple list of gps points along with total distance and estimated duration
  RoutingService.prototype.route = function (request) {
    return this.client.call('routing', 'Route', request);
  };
  return RoutingService;
})();
export { RoutingService };
