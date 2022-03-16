const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.db.renameTable({
    from: "examples2",
    to: "examples3",
  });
  console.log(rsp);
}

main();
