// npm install m3o
const { PostcodeService } = require("m3o/postcode");

const postcodeService = new PostcodeService(process.env.M3O_API_TOKEN);

// Return a random postcode and its related info
async function returnArandomPostcodeAndItsInformation() {
  const rsp = await postcodeService.random({});
  console.log(rsp);
}

returnArandomPostcodeAndItsInformation();
