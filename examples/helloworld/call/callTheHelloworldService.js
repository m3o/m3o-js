// npm install m3o
const { Helloworld } = require("m3o/helloworld");

const helloworldService = new Helloworld(process.env.M3O_API_TOKEN);

// Call returns a personalised "Hello $name" response
async function callTheHelloworldService() {
  const rsp = await helloworldService.call({
    name: "John",
  });
  console.log(rsp);
}

callTheHelloworldService();
