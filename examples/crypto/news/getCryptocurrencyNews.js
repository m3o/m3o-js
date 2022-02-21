// npm install m3o
const { CryptoService } = require("m3o/crypto");

const cryptoService = new CryptoService(process.env.M3O_API_TOKEN);

// Get news related to a currency
async function getCryptocurrencyNews() {
  const rsp = await cryptoService.news({
    symbol: "BTCUSD",
  });
  console.log(rsp);
}

getCryptocurrencyNews();
