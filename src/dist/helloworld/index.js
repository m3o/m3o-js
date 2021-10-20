import * as m3o from '@m3o/m3o-node';
var HelloworldService = /** @class */ (function () {
  function HelloworldService(token) {
    this.client = new m3o.Client({ token: token });
  }
  // Call returns a personalised "Hello $name" response
  HelloworldService.prototype.call = function (request) {
    return this.client.call('helloworld', 'Call', request);
  };
  // Stream returns a stream of "Hello $name" responses
  HelloworldService.prototype.stream = function (request) {
    return this.client.call('helloworld', 'Stream', request);
  };
  return HelloworldService;
})();
export { HelloworldService };
