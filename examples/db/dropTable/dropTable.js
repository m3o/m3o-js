// npm install m3o
const { Db } = require("m3o/db");

const dbService = new Db(process.env.M3O_API_TOKEN);

// Drop a table in the DB
async function dropTable() {
  const rsp = await dbService.dropTable({
    table: "example",
  });
  console.log(rsp);
}

dropTable();
