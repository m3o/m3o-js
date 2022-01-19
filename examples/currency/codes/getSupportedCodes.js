// npm install m3o
const { CurrencyService } = require("m3o/currency");

const currencyService = new CurrencyService(process.env.M3O_API_TOKEN);

// Codes returns the supported currency codes for the API
async function getSupportedCodes() {
  const rsp = await currencyService.codes({});
  console.log(rsp);
}

getSupportedCodes();
