// npm install m3o
const { CryptoService } = require("m3o/crypto");

const cryptoService = new CryptoService(process.env.M3O_API_TOKEN);

// Returns the full list of supported symbols
async function getListOfAllSupportedSymbols() {
  const rsp = await cryptoService.symbols({});
  console.log(rsp);
}

getListOfAllSupportedSymbols();
