// npm install m3o
const { StockService } = require("m3o/stock");

const stockService = new StockService(process.env.M3O_API_TOKEN);

// Get the historic order book and each trade by timestamp
async function orderBookHistory() {
  const rsp = await stockService.orderBook({
    date: "2020-10-01",
    end: "2020-10-01T11:00:00Z",
    limit: 3,
    start: "2020-10-01T10:00:00Z",
    stock: "AAPL",
  });
  console.log(rsp);
}

orderBookHistory();
