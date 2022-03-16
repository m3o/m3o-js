const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Delete a file by project name/path
async function main() {
  let rsp = await m3o.file.delete({
    path: "/document/text-files/file.txt",
    project: "examples",
  });
  console.log(rsp);
}

main();
