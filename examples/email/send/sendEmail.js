const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.email.send({
    from: "Awesome Dot Com",
    subject: "Email verification",
    textBody:
      "Hi there,\n\nPlease verify your email by clicking this link: $micro_verification_link",
  });
  console.log(rsp);
}

main();
