const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.user.updatePassword({
    confirmPassword: "Password2",
    newPassword: "Password2",
    oldPassword: "Password1",
    userId: "user-1",
  });
  console.log(rsp);
}

main();
