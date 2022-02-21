// npm install m3o
const { UserService } = require("m3o/user");

const userService = new UserService(process.env.M3O_API_TOKEN);

// List all users. Returns a paged list of results
async function listAllUsers() {
  const rsp = await userService.list({
    limit: 100,
    offset: 0,
  });
  console.log(rsp);
}

listAllUsers();
