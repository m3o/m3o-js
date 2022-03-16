const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.nft.assets({
    limit: 1,
    order_by: "sale_date",
  });
  console.log(rsp);
}

main();
