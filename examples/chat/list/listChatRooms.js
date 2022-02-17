// npm install m3o
const { ChatService } = require("m3o/chat");

const chatService = new ChatService(process.env.M3O_API_TOKEN);

// List available chats
async function listChatRooms() {
  const rsp = await chatService.list({});
  console.log(rsp);
}

listChatRooms();
