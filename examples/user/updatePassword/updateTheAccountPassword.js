// npm install m3o
const { UserService } = require("m3o/user");

const userService = new UserService(process.env.M3O_API_TOKEN);

// Update the account password
async function updateTheAccountPassword() {
  const rsp = await userService.updatePassword({
    confirmPassword: "Password2",
    id: "user-1",
    newPassword: "Password2",
    oldPassword: "Password1",
  });
  console.log(rsp);
}

updateTheAccountPassword();
