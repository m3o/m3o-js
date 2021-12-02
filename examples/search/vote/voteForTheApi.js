const { SearchService } = require("m3o/search");

const searchService = new SearchService(process.env.M3O_API_TOKEN);

// Vote to have the Search api launched faster!
async function voteForTheApi() {
  const rsp = await searchService.vote({
    message: "Launch it!",
  });
  console.log(rsp);
}

voteForTheApi();
