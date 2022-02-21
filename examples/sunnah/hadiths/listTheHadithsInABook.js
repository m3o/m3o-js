// npm install m3o
const { SunnahService } = require("m3o/sunnah");

const sunnahService = new SunnahService(process.env.M3O_API_TOKEN);

// Hadiths returns a list of hadiths and their corresponding text for a
// given book within a collection.
async function listTheHadithsInAbook() {
  const rsp = await sunnahService.hadiths({
    book: 1,
    collection: "bukhari",
  });
  console.log(rsp);
}

listTheHadithsInAbook();
