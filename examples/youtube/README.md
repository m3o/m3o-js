# Youtube

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Youtube/api](https://m3o.com/Youtube/api).

Endpoints:

## Search

Search for videos on YouTube


[https://m3o.com/youtube/api#Search](https://m3o.com/youtube/api#Search)

```js
const { YoutubeService } = require('m3o/youtube');

const youtubeService = new YoutubeService(process.env.M3O_API_TOKEN)

// Search for videos on YouTube
async function searchForVideos() {
	const rsp = await youtubeService.search({
  "query": "donuts"
})
	console.log(rsp)
	
}

searchForVideos()
```
## Embed

Embed a YouTube video


[https://m3o.com/youtube/api#Embed](https://m3o.com/youtube/api#Embed)

```js
const { YoutubeService } = require('m3o/youtube');

const youtubeService = new YoutubeService(process.env.M3O_API_TOKEN)

// Embed a YouTube video
async function embedAyoutubeVideo() {
	const rsp = await youtubeService.embed({
  "url": "https://www.youtube.com/watch?v=GWRWZu7XsJ0"
})
	console.log(rsp)
	
}

embedAyoutubeVideo()
```
