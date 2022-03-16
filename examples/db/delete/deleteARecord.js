const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.db.delete({
    id: "1",
    table: "example",
  });
  console.log(rsp);
}

main();
