const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Read an object in space
async function main() {
  let rsp = await m3o.space.read({
    name: "images/file.jpg",
  });
  console.log(rsp);
}

main();
