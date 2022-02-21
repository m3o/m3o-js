// npm install m3o
const { ChatService } = require("m3o/chat");

const chatService = new ChatService(process.env.M3O_API_TOKEN);

// Kick a user from a chat room
async function kickAuserFromAroom() {
  const rsp = await chatService.kick({
    room_id: "d8057208-f81a-4e14-ad7f-c29daa2bb910",
    user_id: "user-1",
  });
  console.log(rsp);
}

kickAuserFromAroom();
