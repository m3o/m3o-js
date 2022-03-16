const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// List tables in the DB
async function main() {
  let rsp = await m3o.db.listTables({});
  console.log(rsp);
}

main();
