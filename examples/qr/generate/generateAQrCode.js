// npm install m3o
const { QrService } = require("m3o/qr");

const qrService = new QrService(process.env.M3O_API_TOKEN);

// Generate a QR code with a specific text and size
async function generateAqrCode() {
  const rsp = await qrService.generate({
    size: 300,
    text: "https://m3o.com/qr",
  });
  console.log(rsp);
}

generateAqrCode();
