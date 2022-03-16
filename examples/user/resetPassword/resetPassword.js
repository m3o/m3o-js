const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Reset password with the code sent by the "SendPasswordResetEmail" endpoint.
async function main() {
  let rsp = await m3o.user.resetPassword({
    code: "012345",
    confirmPassword: "NewPassword1",
    email: "joe@example.com",
    newPassword: "NewPassword1",
  });
  console.log(rsp);
}

main();
