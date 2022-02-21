// npm install m3o
const { Ping } = require("m3o/ping");

const pingService = new Ping(process.env.M3O_API_TOKEN);

// Ping a TCP port is open
async function dialAtcpAddress() {
  const rsp = await pingService.tcp({
    address: "google.com:80",
  });
  console.log(rsp);
}

dialAtcpAddress();
