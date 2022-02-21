// npm install m3o
const { Comments } = require("m3o/comments");

const commentsService = new Comments(process.env.M3O_API_TOKEN);

// Create a new comment
async function createAcomment() {
  const rsp = await commentsService.create({
    text: "This is my comment",
    title: "New Comment",
  });
  console.log(rsp);
}

createAcomment();
