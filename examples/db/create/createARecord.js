// npm install m3o
const { DbService } = require("m3o/db");

const dbService = new DbService(process.env.M3O_API_TOKEN);

// Create a record in the database. Optionally include an "id" field otherwise it's set automatically.
async function createArecord() {
  const rsp = await dbService.create({
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

createArecord();
