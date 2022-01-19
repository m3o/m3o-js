// npm install m3o
const { UserService } = require("m3o/user");

const userService = new UserService(process.env.M3O_API_TOKEN);

// Read an account by id, username or email. Only one need to be specified.
async function readAccountByEmail() {
  const rsp = await userService.read({
    email: "joe@example.com",
  });
  console.log(rsp);
}

readAccountByEmail();
