// npm install m3o
const { DbService } = require("m3o/db");

const dbService = new DbService(process.env.M3O_API_TOKEN);

// Read data from a table. Lookup can be by ID or via querying any field in the record.
async function readRecords() {
  const rsp = await dbService.read({
    query: "age == 43",
    table: "example",
  });
  console.log(rsp);
}

readRecords();
