// npm install m3o
const { Comments } = require("m3o/comments");

const commentsService = new Comments(process.env.M3O_API_TOKEN);

// Subscribe to comments events
async function subscribeToEvents() {
  const rsp = await commentsService.events({
    id: "63c0cdf8-2121-11ec-a881-0242e36f037a",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

subscribeToEvents();
