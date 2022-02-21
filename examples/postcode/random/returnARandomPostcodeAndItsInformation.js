// npm install m3o
const { Postcode } = require("m3o/postcode");

const postcodeService = new Postcode(process.env.M3O_API_TOKEN);

// Return a random postcode and its related info
async function returnArandomPostcodeAndItsInformation() {
  const rsp = await postcodeService.random({});
  console.log(rsp);
}

returnArandomPostcodeAndItsInformation();
