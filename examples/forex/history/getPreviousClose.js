// npm install m3o
const { Forex } = require("m3o/forex");

const forexService = new Forex(process.env.M3O_API_TOKEN);

// Returns the data for the previous close
async function getPreviousClose() {
  const rsp = await forexService.history({
    symbol: "GBPUSD",
  });
  console.log(rsp);
}

getPreviousClose();
