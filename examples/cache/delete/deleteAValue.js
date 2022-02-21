// npm install m3o
const { Cache } = require("m3o/cache");

const cacheService = new Cache(process.env.M3O_API_TOKEN);

// Delete a value from the cache. If key not found a success response is returned.
async function deleteAvalue() {
  const rsp = await cacheService.delete({
    key: "foo",
  });
  console.log(rsp);
}

deleteAvalue();
