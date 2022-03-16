const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Check whether an email is likely to be spam based on its attributes
async function main() {
  let rsp = await m3o.spam.classify({
    from: "noreply@m3o.com",
    subject: "Welcome",
    text_body: "Hi there,\n\nWelcome to M3O.\n\nThanks\nM3O team",
    to: "hello@example.com",
  });
  console.log(rsp);
}

main();
