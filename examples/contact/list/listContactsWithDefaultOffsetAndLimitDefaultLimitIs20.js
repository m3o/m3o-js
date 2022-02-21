// npm install m3o
const { ContactService } = require("m3o/contact");

const contactService = new ContactService(process.env.M3O_API_TOKEN);

//
async function listContactsWithDefaultOffsetAndLimitDefaultLimitIs20() {
  const rsp = await contactService.list({});
  console.log(rsp);
}

listContactsWithDefaultOffsetAndLimitDefaultLimitIs20();
