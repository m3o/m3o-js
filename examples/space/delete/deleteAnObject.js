const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Delete an object from space
async function main() {
  let rsp = await m3o.space.delete({
    name: "images/file.jpg",
  });
  console.log(rsp);
}

main();
