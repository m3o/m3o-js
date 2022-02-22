# Sunnah

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Sunnah/api](https://m3o.com/Sunnah/api).

Endpoints:

## Books

Get a list of books from within a collection. A book can contain many chapters
each with its own hadiths.


[https://m3o.com/sunnah/api#Books](https://m3o.com/sunnah/api#Books)

```js
const { SunnahService } = require('m3o/sunnah');

const sunnahService = new SunnahService(process.env.M3O_API_TOKEN)

// Get a list of books from within a collection. A book can contain many chapters
// each with its own hadiths.
async function getTheBooksWithinAcollection() {
	const rsp = await sunnahService.books({
  "collection": "bukhari"
})
	console.log(rsp)
	
}

getTheBooksWithinAcollection()
```
## Chapters

Get all the chapters of a given book within a collection.


[https://m3o.com/sunnah/api#Chapters](https://m3o.com/sunnah/api#Chapters)

```js
const { SunnahService } = require('m3o/sunnah');

const sunnahService = new SunnahService(process.env.M3O_API_TOKEN)

// Get all the chapters of a given book within a collection.
async function listTheChaptersInAbook() {
	const rsp = await sunnahService.chapters({
  "book": 1,
  "collection": "bukhari"
})
	console.log(rsp)
	
}

listTheChaptersInAbook()
```
## Hadiths

Hadiths returns a list of hadiths and their corresponding text for a
given book within a collection.


[https://m3o.com/sunnah/api#Hadiths](https://m3o.com/sunnah/api#Hadiths)

```js
const { SunnahService } = require('m3o/sunnah');

const sunnahService = new SunnahService(process.env.M3O_API_TOKEN)

// Hadiths returns a list of hadiths and their corresponding text for a
// given book within a collection.
async function listTheHadithsInAbook() {
	const rsp = await sunnahService.hadiths({
  "book": 1,
  "collection": "bukhari"
})
	console.log(rsp)
	
}

listTheHadithsInAbook()
```
## Collections

Get a list of available collections. A collection is
a compilation of hadiths collected and written by an author.


[https://m3o.com/sunnah/api#Collections](https://m3o.com/sunnah/api#Collections)

```js
const { SunnahService } = require('m3o/sunnah');

const sunnahService = new SunnahService(process.env.M3O_API_TOKEN)

// Get a list of available collections. A collection is
// a compilation of hadiths collected and written by an author.
async function listAvailableCollections() {
	const rsp = await sunnahService.collections({})
	console.log(rsp)
	
}

listAvailableCollections()
```
