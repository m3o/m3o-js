const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Subscribe to comments events
async function main() {
  let rsp = await m3o.comments.events({
    id: "63c0cdf8-2121-11ec-a881-0242e36f037a",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

main();
