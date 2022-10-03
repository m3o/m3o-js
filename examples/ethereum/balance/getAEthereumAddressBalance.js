const m3o = require("m3o").default(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.ethereum.balance({
    address: "0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae",
  });
  console.log(rsp);
}

main();
