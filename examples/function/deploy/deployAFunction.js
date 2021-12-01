const { FunctionService } = require("m3o/function");

const functionService = new FunctionService(process.env.M3O_API_TOKEN);

// Deploy a group of functions
async function deployAfunction() {
  const rsp = await functionService.deploy({
    entrypoint: "helloworld",
    name: "helloworld",
    repo: "github.com/m3o/nodejs-function-example",
    runtime: "nodejs14",
  });
  console.log(rsp);
}

deployAfunction();
