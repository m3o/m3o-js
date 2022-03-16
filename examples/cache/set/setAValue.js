const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Set an item in the cache. Overwrites any existing value already set.
async function main() {
  let rsp = await m3o.cache.set({
    key: "foo",
    value: "bar",
  });
  console.log(rsp);
}

main();
