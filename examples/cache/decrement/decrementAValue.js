// npm install m3o
const { CacheService } = require("m3o/cache");

const cacheService = new CacheService(process.env.M3O_API_TOKEN);

// Decrement a value (if it's a number). If key not found it is equivalent to set.
async function decrementAvalue() {
  const rsp = await cacheService.decrement({
    key: "counter",
    value: 2,
  });
  console.log(rsp);
}

decrementAvalue();
