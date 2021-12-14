# File

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/File/api](https://m3o.com/File/api).

Endpoints:

## Read

Read a file by path


[https://m3o.com/file/api#Read](https://m3o.com/file/api#Read)

```js
const { FileService } = require('m3o/file');

const fileService = new FileService(process.env.M3O_API_TOKEN)

// Read a file by path
async function readFile() {
	const rsp = await fileService.read({
  "path": "/document/text-files/file.txt",
  "project": "examples"
})
	console.log(rsp)
	
}

readFile()
```
## Delete

Delete a file by project name/path


[https://m3o.com/file/api#Delete](https://m3o.com/file/api#Delete)

```js
const { FileService } = require('m3o/file');

const fileService = new FileService(process.env.M3O_API_TOKEN)

// Delete a file by project name/path
async function deleteFile() {
	const rsp = await fileService.delete({
  "path": "/document/text-files/file.txt",
  "project": "examples"
})
	console.log(rsp)
	
}

deleteFile()
```
## Save

Save a file


[https://m3o.com/file/api#Save](https://m3o.com/file/api#Save)

```js
const { FileService } = require('m3o/file');

const fileService = new FileService(process.env.M3O_API_TOKEN)

// Save a file
async function saveFile() {
	const rsp = await fileService.save({
  "file": {
    "content": "file content example",
    "path": "/document/text-files/file.txt",
    "project": "examples"
  }
})
	console.log(rsp)
	
}

saveFile()
```
## List

List files by their project and optionally a path.


[https://m3o.com/file/api#List](https://m3o.com/file/api#List)

```js
const { FileService } = require('m3o/file');

const fileService = new FileService(process.env.M3O_API_TOKEN)

// List files by their project and optionally a path.
async function listFiles() {
	const rsp = await fileService.list({
  "project": "examples"
})
	console.log(rsp)
	
}

listFiles()
```
