// npm install m3o
const { Chat } = require("m3o/chat");

const chatService = new Chat(process.env.M3O_API_TOKEN);

// Create a new chat room
async function createAnewChat() {
  const rsp = await chatService.new({
    description: "The general chat room",
    name: "general",
  });
  console.log(rsp);
}

createAnewChat();
