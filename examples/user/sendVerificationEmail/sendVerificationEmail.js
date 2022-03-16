const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.user.sendVerificationEmail({
    email: "joe@example.com",
    failureRedirectUrl: "https://m3o.com/verification-failed",
    fromName: "Awesome Dot Com",
    redirectUrl: "https://m3o.com",
    subject: "Email verification",
    textContent:
      "Hi there,\n\nPlease verify your email by clicking this link: $micro_verification_link",
  });
  console.log(rsp);
}

main();
