// npm install m3o
const { Avatar } = require("m3o/avatar");

const avatarService = new Avatar(process.env.M3O_API_TOKEN);

// Generate an unique avatar
async function generateAvatarAndReturnBase64stringOfTheAvatar() {
  const rsp = await avatarService.generate({
    format: "jpeg",
    gender: "female",
    upload: false,
    username: "",
  });
  console.log(rsp);
}

generateAvatarAndReturnBase64stringOfTheAvatar();
