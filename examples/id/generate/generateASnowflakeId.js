const { IdService } = require("m3o/id");

// Generate a unique ID. Defaults to uuid.
async function generateAsnowflakeId() {
  let idService = new IdService(process.env.M3O_API_TOKEN);
  let rsp = await idService.generate({
    type: "snowflake",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

generateAsnowflakeId();
