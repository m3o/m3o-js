const { UserService } = require("m3o/user");

// Read an account by id, username or email. Only one need to be specified.
async function readAccountByEmail() {
  let userService = new UserService(process.env.M3O_API_TOKEN);
  let rsp = await userService.read({
    email: "joe@example.com",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

readAccountByEmail();
