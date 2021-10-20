import * as m3o from '@m3o/m3o-node';
var DbService = /** @class */ (function () {
  function DbService(token) {
    this.client = new m3o.Client({ token: token });
  }
  // Create a record in the database. Optionally include an "id" field otherwise it's set automatically.
  DbService.prototype.create = function (request) {
    return this.client.call('db', 'Create', request);
  };
  // Delete a record in the database by id.
  DbService.prototype.delete = function (request) {
    return this.client.call('db', 'Delete', request);
  };
  // Read data from a table. Lookup can be by ID or via querying any field in the record.
  DbService.prototype.read = function (request) {
    return this.client.call('db', 'Read', request);
  };
  // Truncate the records in a table
  DbService.prototype.truncate = function (request) {
    return this.client.call('db', 'Truncate', request);
  };
  // Update a record in the database. Include an "id" in the record to update.
  DbService.prototype.update = function (request) {
    return this.client.call('db', 'Update', request);
  };
  return DbService;
})();
export { DbService };
