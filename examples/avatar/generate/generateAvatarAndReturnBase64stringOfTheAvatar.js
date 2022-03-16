const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Generate an unique avatar
async function main() {
  let rsp = await m3o.avatar.generate({
    format: "jpeg",
    gender: "female",
    upload: false,
    username: "",
  });
  console.log(rsp);
}

main();
