const { CryptoService } = require("m3o/crypto");

// Returns the history for the previous close
async function getPreviousClose() {
  let cryptoService = new CryptoService(process.env.M3O_API_TOKEN);
  let rsp = await cryptoService.history({
    symbol: "BTCUSD",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

getPreviousClose();
