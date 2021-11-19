const { EmailService } = require("m3o/email");
// Send an email by passing in from, to, subject, and a text or html body

const emailService = new EmailService(process.env.M3O_API_TOKEN);

async function sendEmail() {
  const rsp = await emailService.send({
    from: "Awesome Dot Com",
    subject: "Email verification",
    textBody:
      "Hi there,\n\nPlease verify your email by clicking this link: $micro_verification_link",
  });
  console.log(rsp);
}

sendEmail();
