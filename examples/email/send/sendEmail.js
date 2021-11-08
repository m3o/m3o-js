const { EmailService } = require("m3o/email");

// Send an email by passing in from, to, subject, and a text or html body
async function sendEmail() {
  let emailService = new EmailService(process.env.M3O_API_TOKEN);
  let rsp = await emailService.send({
    from: "Awesome Dot Com",
    subject: "Email verification",
    textBody:
      "Hi there,\n\nPlease verify your email by clicking this link: $micro_verification_link",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

sendEmail();
