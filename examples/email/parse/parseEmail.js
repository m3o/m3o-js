// npm install m3o
const { EmailService } = require("m3o/email");

const emailService = new EmailService(process.env.M3O_API_TOKEN);

// Parse an RFC5322 address e.g "Joe Blogs <joe@example.com>"
async function parseEmail() {
  const rsp = await emailService.parse({
    address: "Joe Blogs \u003cjoe@example.com\u003e",
  });
  console.log(rsp);
}

parseEmail();
