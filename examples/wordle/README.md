# Wordle

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Wordle/api](https://m3o.com/Wordle/api).

Endpoints:

## Guess

Make a guess


[https://m3o.com/wordle/api#Guess](https://m3o.com/wordle/api#Guess)

```js
const { WordleService } = require('m3o/wordle');

const wordleService = new WordleService(process.env.M3O_API_TOKEN)

// Make a guess
async function makeAguess() {
	const rsp = await wordleService.guess({
  "word": "noise"
})
	console.log(rsp)
	
}

makeAguess()
```
## Next

When does the next game start


[https://m3o.com/wordle/api#Next](https://m3o.com/wordle/api#Next)

```js
const { WordleService } = require('m3o/wordle');

const wordleService = new WordleService(process.env.M3O_API_TOKEN)

// When does the next game start
async function nextGame() {
	const rsp = await wordleService.next({})
	console.log(rsp)
	
}

nextGame()
```
