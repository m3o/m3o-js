// npm install m3o
const { Forex } = require("m3o/forex");

const forexService = new Forex(process.env.M3O_API_TOKEN);

// Get the latest price for a given forex ticker
async function getAnFxPrice() {
  const rsp = await forexService.price({
    symbol: "GBPUSD",
  });
  console.log(rsp);
}

getAnFxPrice();
