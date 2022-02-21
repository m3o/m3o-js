// npm install m3o
const { Stock } = require("m3o/stock");

const stockService = new Stock(process.env.M3O_API_TOKEN);

// Get the historic open-close for a given day
async function getHistoricData() {
  const rsp = await stockService.history({
    date: "2020-10-01",
    stock: "AAPL",
  });
  console.log(rsp);
}

getHistoricData();
