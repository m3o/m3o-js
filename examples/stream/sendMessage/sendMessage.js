const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.stream.sendMessage({
    channel: "general",
    text: "Hey checkout this tweet https://twitter.com/m3oservices/status/1455291054295498752",
  });
  console.log(rsp);
}

main();
