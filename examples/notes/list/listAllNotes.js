const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// List all the notes
async function main() {
  let rsp = await m3o.notes.list({});
  console.log(rsp);
}

main();
