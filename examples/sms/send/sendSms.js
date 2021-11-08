const { SmsService } = require("m3o/sms");

// Send an SMS.
async function sendSms() {
  let smsService = new SmsService(process.env.M3O_API_TOKEN);
  let rsp = await smsService.send({
    from: "Alice",
    message: "Hi there!",
    to: "+447681129",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

sendSms();
