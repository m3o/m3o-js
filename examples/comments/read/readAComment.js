// npm install m3o
const { CommentsService } = require("m3o/comments");

const commentsService = new CommentsService(process.env.M3O_API_TOKEN);

// Read a comment
async function readAcomment() {
  const rsp = await commentsService.read({
    id: "63c0cdf8-2121-11ec-a881-0242e36f037a",
  });
  console.log(rsp);
}

readAcomment();
