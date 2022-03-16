const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.twitter.timeline({
    limit: 1,
    username: "m3oservices",
  });
  console.log(rsp);
}

main();
