const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Lookup the geolocation information for an IP address
async function main() {
  let rsp = await m3o.ip.lookup({
    ip: "93.148.214.31",
  });
  console.log(rsp);
}

main();
