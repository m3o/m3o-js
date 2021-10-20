import * as m3o from '@m3o/m3o-node';
var RssService = /** @class */ (function () {
  function RssService(token) {
    this.client = new m3o.Client({ token: token });
  }
  // Add a new RSS feed with a name, url, and category
  RssService.prototype.add = function (request) {
    return this.client.call('rss', 'Add', request);
  };
  // Get an RSS feed by name. If no name is given, all feeds are returned. Default limit is 25 entries.
  RssService.prototype.feed = function (request) {
    return this.client.call('rss', 'Feed', request);
  };
  // List the saved RSS fields
  RssService.prototype.list = function (request) {
    return this.client.call('rss', 'List', request);
  };
  // Remove an RSS feed by name
  RssService.prototype.remove = function (request) {
    return this.client.call('rss', 'Remove', request);
  };
  return RssService;
})();
export { RssService };
