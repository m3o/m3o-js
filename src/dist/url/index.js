import * as m3o from '@m3o/m3o-node';
var UrlService = /** @class */ (function () {
  function UrlService(token) {
    this.client = new m3o.Client({ token: token });
  }
  // List information on all the shortened URLs that you have created
  UrlService.prototype.list = function (request) {
    return this.client.call('url', 'List', request);
  };
  // Proxy returns the destination URL of a short URL.
  UrlService.prototype.proxy = function (request) {
    return this.client.call('url', 'Proxy', request);
  };
  // Shortens a destination URL and returns a full short URL.
  UrlService.prototype.shorten = function (request) {
    return this.client.call('url', 'Shorten', request);
  };
  return UrlService;
})();
export { UrlService };
