// npm install m3o
const { Db } = require("m3o/db");

const dbService = new Db(process.env.M3O_API_TOKEN);

// List tables in the DB
async function listTables() {
  const rsp = await dbService.listTables({});
  console.log(rsp);
}

listTables();
