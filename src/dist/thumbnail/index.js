import * as m3o from '@m3o/m3o-node';
var ThumbnailService = /** @class */ (function () {
  function ThumbnailService(token) {
    this.client = new m3o.Client({ token: token });
  }
  // Create a thumbnail screenshot by passing in a url, height and width
  ThumbnailService.prototype.screenshot = function (request) {
    return this.client.call('thumbnail', 'Screenshot', request);
  };
  return ThumbnailService;
})();
export { ThumbnailService };
