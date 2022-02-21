// npm install m3o
const { CryptoService } = require("m3o/crypto");

const cryptoService = new CryptoService(process.env.M3O_API_TOKEN);

// Returns the history for the previous close
async function getPreviousClose() {
  const rsp = await cryptoService.history({
    symbol: "BTCUSD",
  });
  console.log(rsp);
}

getPreviousClose();
