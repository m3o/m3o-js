// npm install m3o
const { Chat } = require("m3o/chat");

const chatService = new Chat(process.env.M3O_API_TOKEN);

// List available chats
async function listChatRooms() {
  const rsp = await chatService.list({});
  console.log(rsp);
}

listChatRooms();
