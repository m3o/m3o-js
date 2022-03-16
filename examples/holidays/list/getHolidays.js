const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// List the holiday dates for a given country and year
async function main() {
  let rsp = await m3o.holidays.list({
    country_code: "GB",
    year: 2022,
  });
  console.log(rsp);
}

main();
