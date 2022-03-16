const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Returns the data for the previous close
async function main() {
  let rsp = await m3o.forex.history({
    symbol: "GBPUSD",
  });
  console.log(rsp);
}

main();
