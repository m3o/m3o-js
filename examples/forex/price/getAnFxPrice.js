const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Get the latest price for a given forex ticker
async function main() {
  let rsp = await m3o.forex.price({
    symbol: "GBPUSD",
  });
  console.log(rsp);
}

main();
