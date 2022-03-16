const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Ping a TCP port is open
async function main() {
  let rsp = await m3o.ping.tcp({
    address: "google.com:80",
  });
  console.log(rsp);
}

main();
