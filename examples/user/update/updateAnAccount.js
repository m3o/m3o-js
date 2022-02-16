// npm install m3o
const { UserService } = require("m3o/user");

const userService = new UserService(process.env.M3O_API_TOKEN);

// Update the account username or email
async function updateAnAccount() {
  const rsp = await userService.update({
    email: "joe+2@example.com",
    id: "user-1",
    username: "joe",
  });
  console.log(rsp);
}

updateAnAccount();
