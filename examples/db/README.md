# Db

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Db/api](https://m3o.com/Db/api).

Endpoints:

## Create

Create a record in the database. Optionally include an "id" field otherwise it's set automatically.


[https://m3o.com/db/api#Create](https://m3o.com/db/api#Create)

```js
const { DbService } = require('m3o/db');

const dbService = new DbService(process.env.M3O_API_TOKEN)

// Create a record in the database. Optionally include an "id" field otherwise it's set automatically.
async function createArecord() {
	const rsp = await dbService.create({
  "record": {
    "age": 42,
    "id": "1",
    "isActive": true,
    "name": "Jane"
  },
  "table": "example"
})
	console.log(rsp)
	
}

createArecord()
```
## Update

Update a record in the database. Include an "id" in the record to update.


[https://m3o.com/db/api#Update](https://m3o.com/db/api#Update)

```js
const { DbService } = require('m3o/db');

const dbService = new DbService(process.env.M3O_API_TOKEN)

// Update a record in the database. Include an "id" in the record to update.
async function updateArecord() {
	const rsp = await dbService.update({
  "record": {
    "age": 43,
    "id": "1"
  },
  "table": "example"
})
	console.log(rsp)
	
}

updateArecord()
```
## Delete

Delete a record in the database by id.


[https://m3o.com/db/api#Delete](https://m3o.com/db/api#Delete)

```js
const { DbService } = require('m3o/db');

const dbService = new DbService(process.env.M3O_API_TOKEN)

// Delete a record in the database by id.
async function deleteArecord() {
	const rsp = await dbService.delete({
  "id": "1",
  "table": "example"
})
	console.log(rsp)
	
}

deleteArecord()
```
## DropTable

Drop a table in the DB


[https://m3o.com/db/api#DropTable](https://m3o.com/db/api#DropTable)

```js
const { DbService } = require('m3o/db');

const dbService = new DbService(process.env.M3O_API_TOKEN)

// Drop a table in the DB
async function dropTable() {
	const rsp = await dbService.dropTable({
  "table": "example"
})
	console.log(rsp)
	
}

dropTable()
```
## Read

Read data from a table. Lookup can be by ID or via querying any field in the record.


[https://m3o.com/db/api#Read](https://m3o.com/db/api#Read)

```js
const { DbService } = require('m3o/db');

const dbService = new DbService(process.env.M3O_API_TOKEN)

// Read data from a table. Lookup can be by ID or via querying any field in the record.
async function readRecords() {
	const rsp = await dbService.read({
  "query": "age == 43",
  "table": "example"
})
	console.log(rsp)
	
}

readRecords()
```
## Truncate

Truncate the records in a table


[https://m3o.com/db/api#Truncate](https://m3o.com/db/api#Truncate)

```js
const { DbService } = require('m3o/db');

const dbService = new DbService(process.env.M3O_API_TOKEN)

// Truncate the records in a table
async function truncateTable() {
	const rsp = await dbService.truncate({
  "table": "example"
})
	console.log(rsp)
	
}

truncateTable()
```
## Count

Count records in a table


[https://m3o.com/db/api#Count](https://m3o.com/db/api#Count)

```js
const { DbService } = require('m3o/db');

const dbService = new DbService(process.env.M3O_API_TOKEN)

// Count records in a table
async function countEntriesInAtable() {
	const rsp = await dbService.count({
  "table": "example"
})
	console.log(rsp)
	
}

countEntriesInAtable()
```
## ListTables

List tables in the DB


[https://m3o.com/db/api#ListTables](https://m3o.com/db/api#ListTables)

```js
const { DbService } = require('m3o/db');

const dbService = new DbService(process.env.M3O_API_TOKEN)

// List tables in the DB
async function listTables() {
	const rsp = await dbService.listTables({})
	console.log(rsp)
	
}

listTables()
```
## RenameTable

Rename a table


[https://m3o.com/db/api#RenameTable](https://m3o.com/db/api#RenameTable)

```js
const { DbService } = require('m3o/db');

const dbService = new DbService(process.env.M3O_API_TOKEN)

// Rename a table
async function renameTable() {
	const rsp = await dbService.renameTable({
  "from": "examples2",
  "to": "examples3"
})
	console.log(rsp)
	
}

renameTable()
```
