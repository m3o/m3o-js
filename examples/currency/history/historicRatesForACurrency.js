const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Returns the historic rates for a currency on a given date
async function main() {
  let rsp = await m3o.currency.history({
    code: "USD",
    date: "2021-05-30",
  });
  console.log(rsp);
}

main();
