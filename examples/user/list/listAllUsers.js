const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// List all users. Returns a paged list of results
async function main() {
  let rsp = await m3o.user.list({
    limit: 100,
    offset: 0,
  });
  console.log(rsp);
}

main();
