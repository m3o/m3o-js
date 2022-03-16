const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.user.logout({
    sessionId: "df91a612-5b24-4634-99ff-240220ab8f55",
  });
  console.log(rsp);
}

main();
