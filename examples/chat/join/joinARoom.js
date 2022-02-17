// npm install m3o
const { ChatService } = require("m3o/chat");

const chatService = new ChatService(process.env.M3O_API_TOKEN);

// Join a chat room
async function joinAroom() {
  const rsp = await chatService.join({
    room_id: "d8057208-f81a-4e14-ad7f-c29daa2bb910",
    user_id: "user-2",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

joinAroom();
