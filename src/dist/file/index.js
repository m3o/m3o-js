import * as m3o from '@m3o/m3o-node';
var FileService = /** @class */ (function () {
  function FileService(token) {
    this.client = new m3o.Client({ token: token });
  }
  // Delete a file by project name/path
  FileService.prototype.delete = function (request) {
    return this.client.call('file', 'Delete', request);
  };
  // List files by their project and optionally a path.
  FileService.prototype.list = function (request) {
    return this.client.call('file', 'List', request);
  };
  // Read a file by path
  FileService.prototype.read = function (request) {
    return this.client.call('file', 'Read', request);
  };
  // Save a file
  FileService.prototype.save = function (request) {
    return this.client.call('file', 'Save', request);
  };
  return FileService;
})();
export { FileService };
