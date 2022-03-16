const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Update an object. If an object with this name does not exist, creates a new one.
async function main() {
  let rsp = await m3o.space.update({
    name: "images/file.jpg",
    object: "\u003cfile bytes\u003e",
    visibility: "public",
  });
  console.log(rsp);
}

main();
