// npm install m3o
const { Ping } = require("m3o/ping");

const pingService = new Ping(process.env.M3O_API_TOKEN);

// Ping an IP address
async function pingAnIp() {
  const rsp = await pingService.ip({
    address: "google.com",
  });
  console.log(rsp);
}

pingAnIp();
