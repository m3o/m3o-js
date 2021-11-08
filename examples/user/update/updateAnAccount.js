const { UserService } = require("m3o/user");

// Update the account username or email
async function updateAnAccount() {
  let userService = new UserService(process.env.M3O_API_TOKEN);
  let rsp = await userService.update({
    email: "joeotheremail@example.com",
    id: "usrid-1",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

updateAnAccount();
