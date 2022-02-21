// npm install m3o
const { DbService } = require("m3o/db");

const dbService = new DbService(process.env.M3O_API_TOKEN);

// Truncate the records in a table
async function truncateTable() {
  const rsp = await dbService.truncate({
    table: "example",
  });
  console.log(rsp);
}

truncateTable();
