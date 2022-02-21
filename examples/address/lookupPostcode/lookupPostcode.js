// npm install m3o
const { Address } = require("m3o/address");

const addressService = new Address(process.env.M3O_API_TOKEN);

// Lookup a list of UK addresses by postcode
async function lookupPostcode() {
  const rsp = await addressService.lookupPostcode({
    postcode: "SW1A 2AA",
  });
  console.log(rsp);
}

lookupPostcode();
