const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Lookup returns a geocoded address including normalized address and gps coordinates. All fields are optional, provide more to get more accurate results
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
