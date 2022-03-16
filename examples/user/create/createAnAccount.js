const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Create a new user account. The email address and username for the account must be unique.
async function main() {
  let rsp = await m3o.user.create({
    email: "joe@example.com",
    id: "user-1",
    password: "Password1",
    username: "joe",
  });
  console.log(rsp);
}

main();
