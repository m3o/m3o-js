// npm install m3o
const { AnswerService } = require("m3o/answer");

const answerService = new AnswerService(process.env.M3O_API_TOKEN);

// Ask a question and receive an instant answer
async function askAquestion() {
  const rsp = await answerService.question({
    query: "microsoft",
  });
  console.log(rsp);
}

askAquestion();
