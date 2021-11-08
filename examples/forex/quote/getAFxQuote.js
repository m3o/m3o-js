const { ForexService } = require("m3o/forex");

// Get the latest quote for the forex
async function getAfxQuote() {
  let forexService = new ForexService(process.env.M3O_API_TOKEN);
  let rsp = await forexService.quote({
    symbol: "GBPUSD",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

getAfxQuote();
