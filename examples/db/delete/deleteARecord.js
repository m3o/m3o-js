// npm install m3o
const { DbService } = require("m3o/db");

const dbService = new DbService(process.env.M3O_API_TOKEN);

// Delete a record in the database by id.
async function deleteArecord() {
  const rsp = await dbService.delete({
    id: "1",
    table: "example",
  });
  console.log(rsp);
}

deleteArecord();
