const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.contact.list({
    limit: 1,
    offset: 1,
  });
  console.log(rsp);
}

main();
