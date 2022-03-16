const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Returns the history for the previous close
async function main() {
  let rsp = await m3o.crypto.history({
    symbol: "BTCUSD",
  });
  console.log(rsp);
}

main();
