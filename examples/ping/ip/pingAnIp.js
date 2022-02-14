// npm install m3o
const { PingService } = require("m3o/ping");

const pingService = new PingService(process.env.M3O_API_TOKEN);

// Ping an IP address
async function pingAnIp() {
  const rsp = await pingService.ip({
    address: "google.com",
  });
  console.log(rsp);
}

pingAnIp();
