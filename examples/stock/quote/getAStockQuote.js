const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Get the last quote for the stock
async function main() {
  let rsp = await m3o.stock.quote({
    symbol: "AAPL",
  });
  console.log(rsp);
}

main();
