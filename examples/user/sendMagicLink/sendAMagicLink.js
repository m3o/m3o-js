// npm install m3o
const { UserService } = require("m3o/user");

const userService = new UserService(process.env.M3O_API_TOKEN);

// Login using email only - Passwordless
async function sendAmagicLink() {
  const rsp = await userService.sendMagicLink({
    address: "www.example.com",
    email: "joe@example.com",
    endpoint: "verifytoken",
    fromName: "Awesome Dot Com",
    subject: "MagicLink to access your account",
    textContent:
      "Hi there,\n\nClick here to access your account $micro_verification_link",
  });
  console.log(rsp);
}

sendAmagicLink();
