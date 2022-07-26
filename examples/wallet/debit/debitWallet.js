const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.wallet.debit({
    amount: "5",
    id: "b6407edd-2e26-45c0-9e2c-343689bbe5f6",
    reference: "test debit",
    visible: true,
  });
  console.log(rsp);
}

main();
