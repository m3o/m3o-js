// npm install m3o
const { IdService } = require("m3o/id");

const idService = new IdService(process.env.M3O_API_TOKEN);

// Generate a unique ID. Defaults to uuid.
async function generateAsnowflakeId() {
  const rsp = await idService.generate({
    type: "snowflake",
  });
  console.log(rsp);
}

generateAsnowflakeId();
