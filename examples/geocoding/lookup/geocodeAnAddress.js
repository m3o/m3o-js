const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.geocoding.lookup({
    address: "10 russell st",
    city: "london",
    country: "uk",
    postcode: "wc2b",
  });
  console.log(rsp);
}

main();
