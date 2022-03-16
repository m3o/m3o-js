const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Stream returns a stream of "Hello $name" responses
async function main() {
  let rsp = await m3o.helloworld.stream({
    messages: 10,
    name: "John",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

main();
