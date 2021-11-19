const { FunctionService } = require("m3o/function");
// Deploy a group of functions

const functionService = new FunctionService(process.env.M3O_API_TOKEN);

async function deployAfunction() {
  const rsp = await functionService.deploy({
    entrypoint: "helloworld",
    name: "my-first-func",
    project: "tests",
    repo: "github.com/m3o/nodejs-function-example",
    runtime: "nodejs14",
  });
  console.log(rsp);
}

deployAfunction();
