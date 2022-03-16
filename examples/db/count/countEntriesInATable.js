const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Count records in a table
async function main() {
  let rsp = await m3o.db.count({
    table: "example",
  });
  console.log(rsp);
}

main();
