# Search

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Search/api](https://m3o.com/Search/api).

Endpoints:

## Search

Search for records in a given in index


[https://m3o.com/search/api#Search](https://m3o.com/search/api#Search)

```js
const { SearchService } = require('m3o/search');

const searchService = new SearchService(process.env.M3O_API_TOKEN)

// Search for records in a given in index
async function searchForArecord() {
	const rsp = await searchService.search({
  "index": "customers",
  "query": "name == 'John'"
})
	console.log(rsp)
	
}

searchForArecord()
```
## Search

Search for records in a given in index


[https://m3o.com/search/api#Search](https://m3o.com/search/api#Search)

```js
const { SearchService } = require('m3o/search');

const searchService = new SearchService(process.env.M3O_API_TOKEN)

// Search for records in a given in index
async function searchOnMultipleFieldsand() {
	const rsp = await searchService.search({
  "index": "customers",
  "query": "name == 'John' AND starsign == 'Leo'"
})
	console.log(rsp)
	
}

searchOnMultipleFieldsand()
```
## Search

Search for records in a given in index


[https://m3o.com/search/api#Search](https://m3o.com/search/api#Search)

```js
const { SearchService } = require('m3o/search');

const searchService = new SearchService(process.env.M3O_API_TOKEN)

// Search for records in a given in index
async function searchOnMultipleFieldsor() {
	const rsp = await searchService.search({
  "index": "customers",
  "query": "name == 'John' OR name == 'Jane'"
})
	console.log(rsp)
	
}

searchOnMultipleFieldsor()
```
## Delete

Delete a record given its ID


[https://m3o.com/search/api#Delete](https://m3o.com/search/api#Delete)

```js
const { SearchService } = require('m3o/search');

const searchService = new SearchService(process.env.M3O_API_TOKEN)

// Delete a record given its ID
async function deleteArecord() {
	const rsp = await searchService.delete({
  "id": "1234",
  "index": "customers"
})
	console.log(rsp)
	
}

deleteArecord()
```
## CreateIndex

Create an index by name


[https://m3o.com/search/api#CreateIndex](https://m3o.com/search/api#CreateIndex)

```js
const { SearchService } = require('m3o/search');

const searchService = new SearchService(process.env.M3O_API_TOKEN)

// Create an index by name
async function createAnIndex() {
	const rsp = await searchService.createIndex({
  "index": "customers"
})
	console.log(rsp)
	
}

createAnIndex()
```
## DeleteIndex

Delete an index by name


[https://m3o.com/search/api#DeleteIndex](https://m3o.com/search/api#DeleteIndex)

```js
const { SearchService } = require('m3o/search');

const searchService = new SearchService(process.env.M3O_API_TOKEN)

// Delete an index by name
async function deleteAnIndex() {
	const rsp = await searchService.deleteIndex({
  "index": "customers"
})
	console.log(rsp)
	
}

deleteAnIndex()
```
## Index

Index a record i.e. insert a document to search for.


[https://m3o.com/search/api#Index](https://m3o.com/search/api#Index)

```js
const { SearchService } = require('m3o/search');

const searchService = new SearchService(process.env.M3O_API_TOKEN)

// Index a record i.e. insert a document to search for.
async function indexArecord() {
	const rsp = await searchService.index({
  "data": {
    "age": 37,
    "name": "John Doe",
    "starsign": "Leo"
  },
  "index": "customers"
})
	console.log(rsp)
	
}

indexArecord()
```
