// npm install m3o
const { User } = require("m3o/user");

const userService = new User(process.env.M3O_API_TOKEN);

// Reset password with the code sent by the "SendPasswordResetEmail" endpoint.
async function resetPassword() {
  const rsp = await userService.resetPassword({
    code: "012345",
    confirmPassword: "NewPassword1",
    email: "joe@example.com",
    newPassword: "NewPassword1",
  });
  console.log(rsp);
}

resetPassword();
