const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Check whether the token attached to MagicLink is valid or not.
// Ideally, you need to call this endpoint from your http request
// handler that handles the endpoint which is specified in the
// SendMagicLink request.
async function main() {
  let rsp = await m3o.user.verifyToken({
    token: "EdsUiidouJJJLldjlloofUiorkojflsWWdld",
  });
  console.log(rsp);
}

main();
