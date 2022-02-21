// npm install m3o
const { Chat } = require("m3o/chat");

const chatService = new Chat(process.env.M3O_API_TOKEN);

// Delete a chat room
async function deleteAchat() {
  const rsp = await chatService.delete({
    room_id: "d8057208-f81a-4e14-ad7f-c29daa2bb910",
  });
  console.log(rsp);
}

deleteAchat();
