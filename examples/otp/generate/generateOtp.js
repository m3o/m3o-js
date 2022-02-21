// npm install m3o
const { Otp } = require("m3o/otp");

const otpService = new Otp(process.env.M3O_API_TOKEN);

// Generate an OTP (one time pass) code
async function generateOtp() {
  const rsp = await otpService.generate({
    id: "asim@example.com",
  });
  console.log(rsp);
}

generateOtp();
