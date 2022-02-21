// npm install m3o
const { Crypto } = require("m3o/crypto");

const cryptoService = new Crypto(process.env.M3O_API_TOKEN);

// Get the last quote for a given crypto ticker
async function getAcryptocurrencyQuote() {
  const rsp = await cryptoService.quote({
    symbol: "BTCUSD",
  });
  console.log(rsp);
}

getAcryptocurrencyQuote();
