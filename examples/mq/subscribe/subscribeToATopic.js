const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Subscribe to messages for a given topic.
async function main() {
  let rsp = await m3o.mq.subscribe({
    topic: "events",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

main();
