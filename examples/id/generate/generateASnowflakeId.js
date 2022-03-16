const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Generate a unique ID. Defaults to uuid.
async function main() {
  let rsp = await m3o.id.generate({
    type: "snowflake",
  });
  console.log(rsp);
}

main();
