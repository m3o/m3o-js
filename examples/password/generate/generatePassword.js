// npm install m3o
const { PasswordService } = require("m3o/password");

const passwordService = new PasswordService(process.env.M3O_API_TOKEN);

// Generate a strong random password
async function generatePassword() {
  const rsp = await passwordService.generate({
    length: 16,
  });
  console.log(rsp);
}

generatePassword();
