const { UserService } = require("m3o/user");

// Read an account by id, username or email. Only one need to be specified.
async function readAnAccountById() {
  let userService = new UserService(process.env.M3O_API_TOKEN);
  let rsp = await userService.read({
    id: "usrid-1",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

readAnAccountById();
