const { PostcodeService } = require("m3o/postcode");

// Lookup a postcode to retrieve the related region, county, etc
async function lookupPostcode() {
  let postcodeService = new PostcodeService(process.env.M3O_API_TOKEN);
  let rsp = await postcodeService.lookup({
    postcode: "SW1A 2AA",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

lookupPostcode();
