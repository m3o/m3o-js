# Joke

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Joke/api](https://m3o.com/Joke/api).

Endpoints:

## Random

Get a random joke


[https://m3o.com/joke/api#Random](https://m3o.com/joke/api#Random)

```js
const { JokeService } = require('m3o/joke');

const jokeService = new JokeService(process.env.M3O_API_TOKEN)

// Get a random joke
async function getRandomNjokes() {
	const rsp = await jokeService.random({
  "count": 3
})
	console.log(rsp)
	
}

getRandomNjokes()
```
