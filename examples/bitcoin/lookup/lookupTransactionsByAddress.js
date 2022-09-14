const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.bitcoin.lookup({
    address: "1MDUoxL1bGvMxhuoDYx6i11ePytECAk9QK",
  });
  console.log(rsp);
}

main();
