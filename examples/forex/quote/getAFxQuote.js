const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Get the latest quote for the forex
async function main() {
  let rsp = await m3o.forex.quote({
    symbol: "GBPUSD",
  });
  console.log(rsp);
}

main();
