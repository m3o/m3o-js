// npm install m3o
const { Stock } = require("m3o/stock");

const stockService = new Stock(process.env.M3O_API_TOKEN);

// Get the last price for a given stock ticker
async function getAstockPrice() {
  const rsp = await stockService.price({
    symbol: "AAPL",
  });
  console.log(rsp);
}

getAstockPrice();
