const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.geocoding.reverse({
    latitude: 51.5123064,
    longitude: -0.1216235,
  });
  console.log(rsp);
}

main();
