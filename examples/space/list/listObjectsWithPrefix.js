const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// List the objects in space
async function main() {
  let rsp = await m3o.space.list({
    prefix: "images/",
  });
  console.log(rsp);
}

main();
