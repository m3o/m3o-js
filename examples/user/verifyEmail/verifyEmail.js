const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Verify the email address of an account from a token sent in an email to the user.
async function main() {
  let rsp = await m3o.user.verifyEmail({
    email: "joe@example.com",
    token: "012345",
  });
  console.log(rsp);
}

main();
