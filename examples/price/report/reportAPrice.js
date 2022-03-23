const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.price.report({
    comment: "Price is not up to date",
    name: "bitcoin",
    symbol: "BTC",
  });
  console.log(rsp);
}

main();
