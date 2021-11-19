const { CurrencyService } = require("m3o/currency");
// Codes returns the supported currency codes for the API

const currencyService = new CurrencyService(process.env.M3O_API_TOKEN);

async function getSupportedCodes() {
  const rsp = await currencyService.codes({});
  console.log(rsp);
}

getSupportedCodes();
