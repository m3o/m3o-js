// npm install m3o
const { PostcodeService } = require("m3o/postcode");

const postcodeService = new PostcodeService(process.env.M3O_API_TOKEN);

// Lookup a postcode to retrieve the related region, county, etc
async function lookupPostcode() {
  const rsp = await postcodeService.lookup({
    postcode: "SW1A 2AA",
  });
  console.log(rsp);
}

lookupPostcode();
