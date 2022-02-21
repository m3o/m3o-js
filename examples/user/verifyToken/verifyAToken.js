// npm install m3o
const { UserService } = require("m3o/user");

const userService = new UserService(process.env.M3O_API_TOKEN);

// Check whether the token attached to MagicLink is valid or not.
// Ideally, you need to call this endpoint from your http request
// handler that handles the endpoint which is specified in the
// SendMagicLink request.
async function verifyAtoken() {
  const rsp = await userService.verifyToken({
    token: "EdsUiidouJJJLldjlloofUiorkojflsWWdld",
  });
  console.log(rsp);
}

verifyAtoken();
