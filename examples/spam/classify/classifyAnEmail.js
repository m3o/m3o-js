// npm install m3o
const { SpamService } = require("m3o/spam");

const spamService = new SpamService(process.env.M3O_API_TOKEN);

// Check whether an email is likely to be spam based on its attributes
async function classifyAnEmail() {
  const rsp = await spamService.classify({
    from: "noreply@m3o.com",
    subject: "Welcome",
    text_body: "Hi there,\n\nWelcome to M3O.\n\nThanks\nM3O team",
    to: "hello@example.com",
  });
  console.log(rsp);
}

classifyAnEmail();
