// npm install m3o
const { DbService } = require("m3o/db");

const dbService = new DbService(process.env.M3O_API_TOKEN);

// Rename a table
async function renameTable() {
  const rsp = await dbService.renameTable({
    from: "examples2",
    to: "examples3",
  });
  console.log(rsp);
}

renameTable();
