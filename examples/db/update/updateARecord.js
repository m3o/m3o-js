const { DbService } = require("m3o/db");

// Update a record in the database. Include an "id" in the record to update.
async function updateArecord() {
  let dbService = new DbService(process.env.M3O_API_TOKEN);
  let rsp = await dbService.update({
    record: {
      age: 43,
      id: "1",
    },
    table: "users",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

updateArecord();
