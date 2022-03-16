const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Get an item from the cache by key. If key is not found, an empty response is returned.
async function main() {
  let rsp = await m3o.cache.get({
    key: "foo",
  });
  console.log(rsp);
}

main();
