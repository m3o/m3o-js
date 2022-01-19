// npm install m3o
const { CarbonService } = require("m3o/carbon");

const carbonService = new CarbonService(process.env.M3O_API_TOKEN);

// Purchase 1KG (0.001 tonne) of carbon offsets in a single request
async function offsetCarbon() {
  const rsp = await carbonService.offset({});
  console.log(rsp);
}

offsetCarbon();
