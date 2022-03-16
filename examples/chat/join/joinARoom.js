const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.chat.join({
    room_id: "d8057208-f81a-4e14-ad7f-c29daa2bb910",
    user_id: "user-2",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

main();
