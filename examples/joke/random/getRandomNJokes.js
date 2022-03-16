const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Get a random joke
async function main() {
  let rsp = await m3o.joke.random({
    count: 3,
  });
  console.log(rsp);
}

main();
