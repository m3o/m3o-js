// npm install m3o
const { Comments } = require("m3o/comments");

const commentsService = new Comments(process.env.M3O_API_TOKEN);

// Delete a comment
async function deleteAcomment() {
  const rsp = await commentsService.delete({
    id: "63c0cdf8-2121-11ec-a881-0242e36f037a",
  });
  console.log(rsp);
}

deleteAcomment();
