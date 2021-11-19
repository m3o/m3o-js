const { CurrencyService } = require("m3o/currency");
// Convert returns the currency conversion rate between two pairs e.g USD/GBP

const currencyService = new CurrencyService(process.env.M3O_API_TOKEN);

async function convertUsdToGbp() {
  const rsp = await currencyService.convert({
    from: "USD",
    to: "GBP",
  });
  console.log(rsp);
}

convertUsdToGbp();
