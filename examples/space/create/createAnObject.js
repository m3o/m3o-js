const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Create an object. Returns error if object with this name already exists. Max object size of 10MB, see Upload endpoint for larger objects. If you want to update an existing object use the `Update` endpoint
async function main() {
  let rsp = await m3o.space.create({
    name: "images/file.jpg",
    object: "\u003cfile bytes\u003e",
    visibility: "public",
  });
  console.log(rsp);
}

main();
