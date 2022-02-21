// npm install m3o
const { Stock } = require("m3o/stock");

const stockService = new Stock(process.env.M3O_API_TOKEN);

// Get the last quote for the stock
async function getAstockQuote() {
  const rsp = await stockService.quote({
    symbol: "AAPL",
  });
  console.log(rsp);
}

getAstockQuote();
