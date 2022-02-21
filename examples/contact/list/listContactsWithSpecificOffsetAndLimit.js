// npm install m3o
const { ContactService } = require("m3o/contact");

const contactService = new ContactService(process.env.M3O_API_TOKEN);

//
async function listContactsWithSpecificOffsetAndLimit() {
  const rsp = await contactService.list({
    limit: 1,
    offset: 1,
  });
  console.log(rsp);
}

listContactsWithSpecificOffsetAndLimit();
