// npm install m3o
const { CryptoService } = require("m3o/crypto");

const cryptoService = new CryptoService(process.env.M3O_API_TOKEN);

// Get the last price for a given crypto ticker
async function getCryptocurrencyPrice() {
  const rsp = await cryptoService.price({
    symbol: "BTCUSD",
  });
  console.log(rsp);
}

getCryptocurrencyPrice();
