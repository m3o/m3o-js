// npm install m3o
const { Function } = require("m3o/function");

const functionService = new Function(process.env.M3O_API_TOKEN);

// Deploy a group of functions
async function deployAfunction() {
  const rsp = await functionService.deploy({
    branch: "main",
    entrypoint: "Helloworld",
    name: "helloworld",
    region: "europe-west1",
    repo: "https://github.com/m3o/m3o",
    runtime: "go116",
    subfolder: "examples/go-function",
  });
  console.log(rsp);
}

deployAfunction();
