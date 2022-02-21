// npm install m3o
const { CommentsService } = require("m3o/comments");

const commentsService = new CommentsService(process.env.M3O_API_TOKEN);

// List all the comments
async function listAllComments() {
  const rsp = await commentsService.list({});
  console.log(rsp);
}

listAllComments();
