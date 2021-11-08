const { ForexService } = require("m3o/forex");

// Get the latest price for a given forex ticker
async function getAnFxPrice() {
  let forexService = new ForexService(process.env.M3O_API_TOKEN);
  let rsp = await forexService.price({
    symbol: "GBPUSD",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

getAnFxPrice();
