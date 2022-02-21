// npm install m3o
const { IpService } = require("m3o/ip");

const ipService = new IpService(process.env.M3O_API_TOKEN);

// Lookup the geolocation information for an IP address
async function lookupIpInfo() {
  const rsp = await ipService.lookup({
    ip: "93.148.214.31",
  });
  console.log(rsp);
}

lookupIpInfo();
