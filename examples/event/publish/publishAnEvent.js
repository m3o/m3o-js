const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Publish a event to the event stream.
async function main() {
  let rsp = await m3o.event.publish({
    message: {
      id: "1",
      type: "signup",
      user: "john",
    },
    topic: "user",
  });
  console.log(rsp);
}

main();
