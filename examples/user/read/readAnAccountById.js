const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Read an account by id, username or email. Only one need to be specified.
async function main() {
  let rsp = await m3o.user.read({
    id: "user-1",
  });
  console.log(rsp);
}

main();
