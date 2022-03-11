// npm install m3o
const { UserService } = require("m3o/user");

const userService = new UserService(process.env.M3O_API_TOKEN);

// Logout of all user's sessions
async function logoutAllSessionsForAuser() {
  const rsp = await userService.logoutAll({
    user_id: "user-1",
  });
  console.log(rsp);
}

logoutAllSessionsForAuser();
