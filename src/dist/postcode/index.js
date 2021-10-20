import * as m3o from '@m3o/m3o-node';
var PostcodeService = /** @class */ (function () {
  function PostcodeService(token) {
    this.client = new m3o.Client({ token: token });
  }
  // Lookup a postcode to retrieve the related region, county, etc
  PostcodeService.prototype.lookup = function (request) {
    return this.client.call('postcode', 'Lookup', request);
  };
  // Return a random postcode and its related info
  PostcodeService.prototype.random = function (request) {
    return this.client.call('postcode', 'Random', request);
  };
  // Validate a postcode.
  PostcodeService.prototype.validate = function (request) {
    return this.client.call('postcode', 'Validate', request);
  };
  return PostcodeService;
})();
export { PostcodeService };
