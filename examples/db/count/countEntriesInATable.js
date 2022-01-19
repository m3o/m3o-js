// npm install m3o
const { DbService } = require("m3o/db");

const dbService = new DbService(process.env.M3O_API_TOKEN);

// Count records in a table
async function countEntriesInAtable() {
  const rsp = await dbService.count({
    table: "example",
  });
  console.log(rsp);
}

countEntriesInAtable();
