const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Get the price of bitcoin
async function main() {
  let rsp = await m3o.bitcoin.price({
    symbol: "BTCUSD",
  });
  console.log(rsp);
}

main();
