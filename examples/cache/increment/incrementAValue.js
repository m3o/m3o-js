const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Increment a value (if it's a number). If key not found it is equivalent to set.
async function main() {
  let rsp = await m3o.cache.increment({
    key: "counter",
    value: 2,
  });
  console.log(rsp);
}

main();
