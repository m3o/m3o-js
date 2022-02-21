// npm install m3o
const { File } = require("m3o/file");

const fileService = new File(process.env.M3O_API_TOKEN);

// Read a file by path
async function readFile() {
  const rsp = await fileService.read({
    path: "/document/text-files/file.txt",
    project: "examples",
  });
  console.log(rsp);
}

readFile();
