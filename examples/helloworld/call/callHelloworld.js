const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Call returns a personalised "Hello $name" response
async function main() {
  let rsp = await m3o.helloworld.call({
    name: "John",
  });
  console.log(rsp);
}

main();
