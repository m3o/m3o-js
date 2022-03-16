const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.address.lookupPostcode({
    postcode: "SW1A 2AA",
  });
  console.log(rsp);
}

main();
