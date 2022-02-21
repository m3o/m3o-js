// npm install m3o
const { Crypto } = require("m3o/crypto");

const cryptoService = new Crypto(process.env.M3O_API_TOKEN);

// Returns the history for the previous close
async function getPreviousClose() {
  const rsp = await cryptoService.history({
    symbol: "BTCUSD",
  });
  console.log(rsp);
}

getPreviousClose();
