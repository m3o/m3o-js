// npm install m3o
const { CurrencyService } = require("m3o/currency");

const currencyService = new CurrencyService(process.env.M3O_API_TOKEN);

// Rates returns the currency rates for a given code e.g USD
async function getRatesForUsd() {
  const rsp = await currencyService.rates({
    code: "USD",
  });
  console.log(rsp);
}

getRatesForUsd();
