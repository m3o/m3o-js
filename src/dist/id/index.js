import * as m3o from '@m3o/m3o-node';
var IdService = /** @class */ (function () {
  function IdService(token) {
    this.client = new m3o.Client({ token: token });
  }
  // Generate a unique ID. Defaults to uuid.
  IdService.prototype.generate = function (request) {
    return this.client.call('id', 'Generate', request);
  };
  // List the types of IDs available. No query params needed.
  IdService.prototype.types = function (request) {
    return this.client.call('id', 'Types', request);
  };
  return IdService;
})();
export { IdService };
