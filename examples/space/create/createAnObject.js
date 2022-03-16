const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.space.create({
    name: "images/file.jpg",
    object: "\u003cfile bytes\u003e",
    visibility: "public",
  });
  console.log(rsp);
}

main();
