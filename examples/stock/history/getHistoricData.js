const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Get the historic open-close for a given day
async function main() {
  let rsp = await m3o.stock.history({
    date: "2020-10-01",
    stock: "AAPL",
  });
  console.log(rsp);
}

main();
