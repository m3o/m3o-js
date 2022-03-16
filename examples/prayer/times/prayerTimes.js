const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Get the prayer (salah) times for a location on a given date
async function main() {
  let rsp = await m3o.prayer.times({
    location: "london",
  });
  console.log(rsp);
}

main();
