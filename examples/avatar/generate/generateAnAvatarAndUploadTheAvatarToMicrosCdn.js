// npm install m3o
const { AvatarService } = require("m3o/avatar");

const avatarService = new AvatarService(process.env.M3O_API_TOKEN);

// Generate an unique avatar
async function generateAnAvatarAndUploadTheAvatarToMicrosCdn() {
  const rsp = await avatarService.generate({
    format: "png",
    gender: "female",
    upload: true,
    username: "",
  });
  console.log(rsp);
}

generateAnAvatarAndUploadTheAvatarToMicrosCdn();
