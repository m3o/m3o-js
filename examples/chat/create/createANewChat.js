// npm install m3o
const { ChatService } = require("m3o/chat");

const chatService = new ChatService(process.env.M3O_API_TOKEN);

// Create a new chat room
async function createAnewChat() {
  const rsp = await chatService.create({
    description: "The general chat room",
    name: "general",
  });
  console.log(rsp);
}

createAnewChat();
