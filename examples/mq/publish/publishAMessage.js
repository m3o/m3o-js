const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Publish a message. Specify a topic to group messages for a specific topic.
async function main() {
  let rsp = await m3o.mq.publish({
    message: {
      id: "1",
      type: "signup",
      user: "john",
    },
    topic: "events",
  });
  console.log(rsp);
}

main();
