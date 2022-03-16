const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.file.save({
    file: {
      content: "file content example",
      path: "/document/text-files/file.txt",
      project: "examples",
    },
  });
  console.log(rsp);
}

main();
