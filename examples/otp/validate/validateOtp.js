// npm install m3o
const { OtpService } = require("m3o/otp");

const otpService = new OtpService(process.env.M3O_API_TOKEN);

// Validate the OTP code
async function validateOtp() {
  const rsp = await otpService.validate({
    code: "656211",
    id: "asim@example.com",
  });
  console.log(rsp);
}

validateOtp();
