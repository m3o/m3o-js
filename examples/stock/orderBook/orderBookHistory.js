const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.stock.orderBook({
    date: "2020-10-01",
    end: "2020-10-01T11:00:00Z",
    limit: 3,
    start: "2020-10-01T10:00:00Z",
    stock: "AAPL",
  });
  console.log(rsp);
}

main();
