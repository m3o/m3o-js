// npm install m3o
const { Cache } = require("m3o/cache");

const cacheService = new Cache(process.env.M3O_API_TOKEN);

// Get an item from the cache by key. If key is not found, an empty response is returned.
async function getAvalue() {
  const rsp = await cacheService.get({
    key: "foo",
  });
  console.log(rsp);
}

getAvalue();
