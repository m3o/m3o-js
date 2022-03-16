const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Logout of all user's sessions
async function main() {
  let rsp = await m3o.user.logoutAll({
    user_id: "user-1",
  });
  console.log(rsp);
}

main();
