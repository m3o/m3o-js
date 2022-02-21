// npm install m3o
const { Chat } = require("m3o/chat");

const chatService = new Chat(process.env.M3O_API_TOKEN);

// Leave a chat room
async function leaveAroom() {
  const rsp = await chatService.leave({
    room_id: "d8057208-f81a-4e14-ad7f-c29daa2bb910",
    user_id: "user-1",
  });
  console.log(rsp);
}

leaveAroom();
