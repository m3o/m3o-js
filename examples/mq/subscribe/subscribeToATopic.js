const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.mq.subscribe({
    topic: "events",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

main();
