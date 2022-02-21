// npm install m3o
const { DbService } = require("m3o/db");

const dbService = new DbService(process.env.M3O_API_TOKEN);

// Update a record in the database. Include an "id" in the record to update.
async function updateArecord() {
  const rsp = await dbService.update({
    record: {
      age: 43,
      id: "1",
    },
    table: "example",
  });
  console.log(rsp);
}

updateArecord();
