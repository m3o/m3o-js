// npm install m3o
const { User } = require("m3o/user");

const userService = new User(process.env.M3O_API_TOKEN);

// Verify the email address of an account from a token sent in an email to the user.
async function verifyEmail() {
  const rsp = await userService.verifyEmail({
    email: "joe@example.com",
    token: "012345",
  });
  console.log(rsp);
}

verifyEmail();
