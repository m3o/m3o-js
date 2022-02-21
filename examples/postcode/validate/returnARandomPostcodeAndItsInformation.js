// npm install m3o
const { PostcodeService } = require("m3o/postcode");

const postcodeService = new PostcodeService(process.env.M3O_API_TOKEN);

// Validate a postcode.
async function returnArandomPostcodeAndItsInformation() {
  const rsp = await postcodeService.validate({
    postcode: "SW1A 2AA",
  });
  console.log(rsp);
}

returnArandomPostcodeAndItsInformation();
