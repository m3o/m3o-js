const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.user.sendMagicLink({
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

main();
