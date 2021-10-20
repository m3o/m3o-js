import * as m3o from '@m3o/m3o-node';
var AddressService = /** @class */ (function () {
  function AddressService(token) {
    this.client = new m3o.Client({ token: token });
  }
  // Lookup a list of UK addresses by postcode
  AddressService.prototype.lookupPostcode = function (request) {
    return this.client.call('address', 'LookupPostcode', request);
  };
  return AddressService;
})();
export { AddressService };
