const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.id.generate({
    type: "xid",
  });
  console.log(rsp);
}

main();
