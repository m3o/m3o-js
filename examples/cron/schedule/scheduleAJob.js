const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.cron.schedule({
    callback: "https://google.com",
    description: "testing",
    interval: "* * * * *",
    name: "test",
  });
  console.log(rsp);
}

main();
