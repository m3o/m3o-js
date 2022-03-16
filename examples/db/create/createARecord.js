const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Create a record in the database. Optionally include an "id" field otherwise it's set automatically.
async function main() {
  let rsp = await m3o.db.create({
    record: {
      age: 42,
      id: "1",
      isActive: true,
      name: "Jane",
    },
    table: "example",
  });
  console.log(rsp);
}

main();
