# Rss

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Rss/api](https://m3o.com/Rss/api).

Endpoints:

## Remove

Remove an RSS feed by name


[https://m3o.com/rss/api#Remove](https://m3o.com/rss/api#Remove)

```js
const { RssService } = require('m3o/rss');

const rssService = new RssService(process.env.M3O_API_TOKEN)

// Remove an RSS feed by name
async function removeAfeed() {
	const rsp = await rssService.remove({
  "name": "bbc"
})
	console.log(rsp)
	
}

removeAfeed()
```
## Add

Add a new RSS feed with a name, url, and category


[https://m3o.com/rss/api#Add](https://m3o.com/rss/api#Add)

```js
const { RssService } = require('m3o/rss');

const rssService = new RssService(process.env.M3O_API_TOKEN)

// Add a new RSS feed with a name, url, and category
async function addAnewFeed() {
	const rsp = await rssService.add({
  "category": "news",
  "name": "bbc",
  "url": "http://feeds.bbci.co.uk/news/rss.xml"
})
	console.log(rsp)
	
}

addAnewFeed()
```
## Feed

Get an RSS feed by name. If no name is given, all feeds are returned. Default limit is 25 entries.


[https://m3o.com/rss/api#Feed](https://m3o.com/rss/api#Feed)

```js
const { RssService } = require('m3o/rss');

const rssService = new RssService(process.env.M3O_API_TOKEN)

// Get an RSS feed by name. If no name is given, all feeds are returned. Default limit is 25 entries.
async function readAfeed() {
	const rsp = await rssService.feed({
  "name": "bbc"
})
	console.log(rsp)
	
}

readAfeed()
```
## List

List the saved RSS fields


[https://m3o.com/rss/api#List](https://m3o.com/rss/api#List)

```js
const { RssService } = require('m3o/rss');

const rssService = new RssService(process.env.M3O_API_TOKEN)

// List the saved RSS fields
async function listRssFeeds() {
	const rsp = await rssService.list({})
	console.log(rsp)
	
}

listRssFeeds()
```
