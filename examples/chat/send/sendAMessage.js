// npm install m3o
const { Chat } = require("m3o/chat");

const chatService = new Chat(process.env.M3O_API_TOKEN);

// Connect to a chat to receive a stream of messages
// Send a message to a chat
async function sendAmessage() {
  const rsp = await chatService.send({
    client: "web",
    room_id: "d8057208-f81a-4e14-ad7f-c29daa2bb910",
    subject: "Random",
    text: "Hey whats up?",
    user_id: "user-1",
  });
  console.log(rsp);
}

sendAmessage();
