// npm install m3o
const { JokeService } = require("m3o/joke");

const jokeService = new JokeService(process.env.M3O_API_TOKEN);

// Get a random joke
async function getRandomNjokes() {
  const rsp = await jokeService.random({
    count: 3,
  });
  console.log(rsp);
}

getRandomNjokes();
