// npm install m3o
const { Function } = require("m3o/function");

const functionService = new Function(process.env.M3O_API_TOKEN);

// Get the info for a deployed function
async function describeFunctionStatus() {
  const rsp = await functionService.describe({
    name: "helloworld",
  });
  console.log(rsp);
}

describeFunctionStatus();
