const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Read data from a table. Lookup can be by ID or via querying any field in the record.
async function main() {
  let rsp = await m3o.db.read({
    query: "age == 43",
    table: "example",
  });
  console.log(rsp);
}

main();
