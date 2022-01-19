// npm install m3o
const { SentimentService } = require("m3o/sentiment");

const sentimentService = new SentimentService(process.env.M3O_API_TOKEN);

// Analyze and score a piece of text
async function analyzeApieceOfText() {
  const rsp = await sentimentService.analyze({
    text: "this is amazing",
  });
  console.log(rsp);
}

analyzeApieceOfText();
