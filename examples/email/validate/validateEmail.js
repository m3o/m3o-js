// npm install m3o
const { EmailService } = require("m3o/email");

const emailService = new EmailService(process.env.M3O_API_TOKEN);

// Validate an email address format
async function validateEmail() {
  const rsp = await emailService.validate({
    address: "joe@example.com",
  });
  console.log(rsp);
}

validateEmail();
