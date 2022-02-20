// npm install m3o
const { CommentsService } = require("m3o/comments");

const commentsService = new CommentsService(process.env.M3O_API_TOKEN);

// Update a comment
async function updateAcomment() {
  const rsp = await commentsService.update({
    comment: {
      id: "63c0cdf8-2121-11ec-a881-0242e36f037a",
      subject: "Update Comment",
      text: "Updated comment text",
    },
  });
  console.log(rsp);
}

updateAcomment();
