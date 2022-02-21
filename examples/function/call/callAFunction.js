// npm install m3o
const { Function } = require("m3o/function");

const functionService = new Function(process.env.M3O_API_TOKEN);

// Call a function by name
async function callAfunction() {
  const rsp = await functionService.call({
    name: "helloworld",
    request: {
      name: "Alice",
    },
  });
  console.log(rsp);
}

callAfunction();
