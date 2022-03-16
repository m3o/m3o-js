const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Lookup a postcode to retrieve the related region, county, etc
async function main() {
  let rsp = await m3o.postcode.lookup({
    postcode: "SW1A 2AA",
  });
  console.log(rsp);
}

main();
