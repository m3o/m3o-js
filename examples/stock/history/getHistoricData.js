// npm install m3o
const { StockService } = require("m3o/stock");

const stockService = new StockService(process.env.M3O_API_TOKEN);

// Get the historic open-close for a given day
async function getHistoricData() {
  const rsp = await stockService.history({
    date: "2020-10-01",
    stock: "AAPL",
  });
  console.log(rsp);
}

getHistoricData();
