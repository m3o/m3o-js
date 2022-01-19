// npm install m3o
const { HelloworldService } = require("m3o/helloworld");

const helloworldService = new HelloworldService(process.env.M3O_API_TOKEN);

// Stream returns a stream of "Hello $name" responses
async function streamsResponsesFromTheServerUsingWebsockets() {
  const rsp = await helloworldService.stream({
    messages: 10,
    name: "John",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

streamsResponsesFromTheServerUsingWebsockets();
