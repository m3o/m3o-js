const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Login using username or email. The response will return a new session for successful login,
// 401 in the case of login failure and 500 for any other error
async function main() {
  let rsp = await m3o.user.login({
    email: "joe@example.com",
    password: "Password1",
  });
  console.log(rsp);
}

main();
