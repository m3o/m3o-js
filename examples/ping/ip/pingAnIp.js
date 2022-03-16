const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Ping an IP address
async function main() {
  let rsp = await m3o.ping.ip({
    address: "google.com",
  });
  console.log(rsp);
}

main();
