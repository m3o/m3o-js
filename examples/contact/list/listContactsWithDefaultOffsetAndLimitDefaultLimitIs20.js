const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// List contacts
async function main() {
  let rsp = await m3o.contact.list({});
  console.log(rsp);
}

main();
