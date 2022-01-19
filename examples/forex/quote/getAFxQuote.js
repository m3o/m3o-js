// npm install m3o
const { ForexService } = require("m3o/forex");

const forexService = new ForexService(process.env.M3O_API_TOKEN);

// Get the latest quote for the forex
async function getAfxQuote() {
  const rsp = await forexService.quote({
    symbol: "GBPUSD",
  });
  console.log(rsp);
}

getAfxQuote();
