// npm install m3o
const { BitcoinService } = require("m3o/bitcoin");

const bitcoinService = new BitcoinService(process.env.M3O_API_TOKEN);

// Get the price of bitcoin
async function getBitcoinPrice() {
  const rsp = await bitcoinService.price({
    symbol: "BTCUSD",
  });
  console.log(rsp);
}

getBitcoinPrice();
