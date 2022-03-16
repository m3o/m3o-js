const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Rates returns the currency rates for a given code e.g USD
async function main() {
  let rsp = await m3o.currency.rates({
    code: "USD",
  });
  console.log(rsp);
}

main();
