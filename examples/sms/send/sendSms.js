// npm install m3o
const { Sms } = require("m3o/sms");

const smsService = new Sms(process.env.M3O_API_TOKEN);

// Send an SMS.
async function sendSms() {
  const rsp = await smsService.send({
    from: "Alice",
    message: "Hi there!",
    to: "+447681129",
  });
  console.log(rsp);
}

sendSms();
