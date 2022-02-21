// npm install m3o
const { Currency } = require("m3o/currency");

const currencyService = new Currency(process.env.M3O_API_TOKEN);

// Returns the historic rates for a currency on a given date
async function historicRatesForAcurrency() {
  const rsp = await currencyService.history({
    code: "USD",
    date: "2021-05-30",
  });
  console.log(rsp);
}

historicRatesForAcurrency();
