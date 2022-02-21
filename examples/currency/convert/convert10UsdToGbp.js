// npm install m3o
const { Currency } = require("m3o/currency");

const currencyService = new Currency(process.env.M3O_API_TOKEN);

// Convert returns the currency conversion rate between two pairs e.g USD/GBP
async function convert10usdToGbp() {
  const rsp = await currencyService.convert({
    amount: 10,
    from: "USD",
    to: "GBP",
  });
  console.log(rsp);
}

convert10usdToGbp();
