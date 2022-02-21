// npm install m3o
const { Id } = require("m3o/id");

const idService = new Id(process.env.M3O_API_TOKEN);

// Generate a unique ID. Defaults to uuid.
async function generateAbigflakeId() {
  const rsp = await idService.generate({
    type: "bigflake",
  });
  console.log(rsp);
}

generateAbigflakeId();
