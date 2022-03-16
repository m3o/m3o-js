const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.file.read({
    path: "/document/text-files/file.txt",
    project: "examples",
  });
  console.log(rsp);
}

main();
