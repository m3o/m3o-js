const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.weather.forecast({
    days: 2,
    location: "London",
  });
  console.log(rsp);
}

main();
