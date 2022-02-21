// npm install m3o
const { UserService } = require("m3o/user");

const userService = new UserService(process.env.M3O_API_TOKEN);

// Send a verification email to a user.
// Email "from" will be 'noreply@email.m3ocontent.com'.
// The verification link will be injected in the email
// as a template variable, $micro_verification_link e.g
// 'Welcome to M3O! Use the link below to verify your email: $micro_verification_link'
// The variable will be replaced with a url similar to:
// 'https://user.m3o.com/user/verify?token=a-verification-token&redirectUrl=your-redir-url'
async function sendVerificationEmail() {
  const rsp = await userService.sendVerificationEmail({
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

sendVerificationEmail();
