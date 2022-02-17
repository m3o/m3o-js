// npm install m3o
const { ChatService } = require("m3o/chat");

const chatService = new ChatService(process.env.M3O_API_TOKEN);

// Invite a user to a chat room
async function inviteAuser() {
  const rsp = await chatService.invite({
    room_id: "d8057208-f81a-4e14-ad7f-c29daa2bb910",
    user_id: "user-1",
  });
  console.log(rsp);
}

inviteAuser();
