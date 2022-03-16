const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Get the last quote for a given crypto ticker
async function main() {
  let rsp = await m3o.crypto.quote({
    symbol: "BTCUSD",
  });
  console.log(rsp);
}

main();
