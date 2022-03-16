const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Invite a user to a chat room
async function main() {
  let rsp = await m3o.chat.invite({
    room_id: "d8057208-f81a-4e14-ad7f-c29daa2bb910",
    user_id: "user-1",
  });
  console.log(rsp);
}

main();
