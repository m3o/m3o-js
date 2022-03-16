const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Get the current weather report for a location by postcode, city, zip code, ip address
async function main() {
  let rsp = await m3o.weather.now({
    location: "london",
  });
  console.log(rsp);
}

main();
