const { JokeService } = require("m3o/joke");

const jokeService = new JokeService(process.env.M3O_API_TOKEN);

//
async function getRandomNjokes() {
  const rsp = await jokeService.random({
    count: 3,
  });
  console.log(rsp);
}

getRandomNjokes();
