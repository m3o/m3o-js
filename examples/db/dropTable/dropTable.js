const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Drop a table in the DB
async function main() {
  let rsp = await m3o.db.dropTable({
    table: "example",
  });
  console.log(rsp);
}

main();
