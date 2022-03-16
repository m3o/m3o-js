const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Truncate the records in a table
async function main() {
  let rsp = await m3o.db.truncate({
    table: "example",
  });
  console.log(rsp);
}

main();
