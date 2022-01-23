// npm install m3o
const { AvatarService } = require("m3o/avatar");

const avatarService = new AvatarService(process.env.M3O_API_TOKEN);

//
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
