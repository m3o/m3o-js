const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.sms.send({
    from: "Alice",
    message: "Hi there!",
    to: "+447681129",
  });
  console.log(rsp);
}

main();
