// npm install m3o
const { Forex } = require("m3o/forex");

const forexService = new Forex(process.env.M3O_API_TOKEN);

// Get the latest quote for the forex
async function getAfxQuote() {
  const rsp = await forexService.quote({
    symbol: "GBPUSD",
  });
  console.log(rsp);
}

getAfxQuote();
