// npm install m3o
const { Cache } = require("m3o/cache");

const cacheService = new Cache(process.env.M3O_API_TOKEN);

// Set an item in the cache. Overwrites any existing value already set.
async function setAvalue() {
  const rsp = await cacheService.set({
    key: "foo",
    value: "bar",
  });
  console.log(rsp);
}

setAvalue();
