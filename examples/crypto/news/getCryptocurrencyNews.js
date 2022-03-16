const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Get news related to a currency
async function main() {
  let rsp = await m3o.crypto.news({
    symbol: "BTCUSD",
  });
  console.log(rsp);
}

main();
