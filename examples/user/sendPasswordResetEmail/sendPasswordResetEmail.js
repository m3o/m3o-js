const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Send an email with a verification code to reset password.
// Call "ResetPassword" endpoint once user provides the code.
async function main() {
  let rsp = await m3o.user.sendPasswordResetEmail({
    email: "joe@example.com",
    fromName: "Awesome Dot Com",
    subject: "Password reset",
    textContent:
      "Hi there,\n click here to reset your password: myapp.com/reset/code?=$code",
  });
  console.log(rsp);
}

main();
