const { FunctionService } = require("m3o/function");

// Deploy a group of functions
async function deployAfunction() {
  let functionService = new FunctionService(process.env.M3O_API_TOKEN);
  let rsp = await functionService.deploy({
    entrypoint: "helloworld",
    name: "my-first-func",
    project: "tests",
    repo: "github.com/m3o/nodejs-function-example",
    runtime: "nodejs14",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

deployAfunction();
