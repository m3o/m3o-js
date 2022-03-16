const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Get a single asset by the contract
async function main() {
  let rsp = await m3o.nft.asset({
    contract_address: "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb",
    token_id: "1",
  });
  console.log(rsp);
}

main();
