const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.user.update({
    email: "joe+2@example.com",
    id: "user-1",
    username: "joe",
  });
  console.log(rsp);
}

main();
