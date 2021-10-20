import * as m3o from '@m3o/m3o-node';
var StreamService = /** @class */ (function () {
  function StreamService(token) {
    this.client = new m3o.Client({ token: token });
  }
  // Publish a message to the stream. Specify a topic to group messages for a specific topic.
  StreamService.prototype.publish = function (request) {
    return this.client.call('stream', 'Publish', request);
  };
  // Subscribe to messages for a given topic.
  StreamService.prototype.subscribe = function (request) {
    return this.client.call('stream', 'Subscribe', request);
  };
  return StreamService;
})();
export { StreamService };
