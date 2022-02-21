// npm install m3o
const { FunctionService } = require("m3o/function");

const functionService = new FunctionService(process.env.M3O_API_TOKEN);

// Return the backend url for proxying
async function proxyUrl() {
  const rsp = await functionService.proxy({
    id: "helloworld",
  });
  console.log(rsp);
}

proxyUrl();
