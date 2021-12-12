const { FunctionService } = require("m3o/function");

const functionService = new FunctionService(process.env.M3O_API_TOKEN);

//
async function updateAfunction() {
  const rsp = await functionService.update({
    entrypoint: "helloworld",
    name: "helloworld",
    repo: "github.com/m3o/nodejs-function-example",
    runtime: "nodejs14",
  });
  console.log(rsp);
}

updateAfunction();
