// npm install m3o
const { Ping } = require("m3o/ping");

const pingService = new Ping(process.env.M3O_API_TOKEN);

// Ping a HTTP URL
async function checkAurl() {
  const rsp = await pingService.url({
    address: "google.com",
  });
  console.log(rsp);
}

checkAurl();
