const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// List files by their project and optionally a path.
async function main() {
  let rsp = await m3o.file.list({
    project: "examples",
  });
  console.log(rsp);
}

main();
