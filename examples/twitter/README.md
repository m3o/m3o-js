# Twitter

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Twitter/api](https://m3o.com/Twitter/api).

Endpoints:

## Search

Search for tweets with a simple query


[https://m3o.com/twitter/api#Search](https://m3o.com/twitter/api#Search)

```js
const { TwitterService } = require('m3o/twitter');

const twitterService = new TwitterService(process.env.M3O_API_TOKEN)

// Search for tweets with a simple query
async function searchForTweets() {
	const rsp = await twitterService.search({
  "query": "cats"
})
	console.log(rsp)
	
}

searchForTweets()
```
## Trends

Get the current global trending topics


[https://m3o.com/twitter/api#Trends](https://m3o.com/twitter/api#Trends)

```js
const { TwitterService } = require('m3o/twitter');

const twitterService = new TwitterService(process.env.M3O_API_TOKEN)

// Get the current global trending topics
async function getTheCurrentGlobalTrendingTopics() {
	const rsp = await twitterService.trends({})
	console.log(rsp)
	
}

getTheCurrentGlobalTrendingTopics()
```
## User

Get a user's twitter profile


[https://m3o.com/twitter/api#User](https://m3o.com/twitter/api#User)

```js
const { TwitterService } = require('m3o/twitter');

const twitterService = new TwitterService(process.env.M3O_API_TOKEN)

// Get a user's twitter profile
async function getAusersTwitterProfile() {
	const rsp = await twitterService.user({
  "username": "crufter"
})
	console.log(rsp)
	
}

getAusersTwitterProfile()
```
## Timeline

Get the timeline for a given user


[https://m3o.com/twitter/api#Timeline](https://m3o.com/twitter/api#Timeline)

```js
const { TwitterService } = require('m3o/twitter');

const twitterService = new TwitterService(process.env.M3O_API_TOKEN)

// Get the timeline for a given user
async function getAtwitterTimeline() {
	const rsp = await twitterService.timeline({
  "limit": 1,
  "username": "m3oservices"
})
	console.log(rsp)
	
}

getAtwitterTimeline()
```
