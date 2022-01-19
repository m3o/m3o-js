// npm install m3o
const { ForexService } = require("m3o/forex");

const forexService = new ForexService(process.env.M3O_API_TOKEN);

// Returns the data for the previous close
async function getPreviousClose() {
  const rsp = await forexService.history({
    symbol: "GBPUSD",
  });
  console.log(rsp);
}

getPreviousClose();
