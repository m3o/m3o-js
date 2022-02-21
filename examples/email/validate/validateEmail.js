// npm install m3o
const { Email } = require("m3o/email");

const emailService = new Email(process.env.M3O_API_TOKEN);

// Validate an email address format
async function validateEmail() {
  const rsp = await emailService.validate({
    address: "joe@example.com",
  });
  console.log(rsp);
}

validateEmail();
