# M3O clients

This package contains type safe javascript and typescript clients.
Usage example:

## Install

```sh
npm install --save @micro/services
```

## Usage

```js
import * as file from '@m3o/services/file';

// Save a file
async function SaveFile() {
  let fileService = new file.FileService(process.env.MICRO_API_TOKEN);
  let rsp = await fileService.save({
    file: {
      content: 'file content example',
      path: '/document/text-files/file.txt',
      project: 'examples'
    }
  });
  console.log(rsp);
}

await SaveFile();
```

Each client has an example folder with otentially multiple examples per service endpoint.
To run the examples, make sure to run the example in a node project that has the `"type": "module"` flag set in the `package.json`:

```js
{
  "name": "example",
  "version": "1.0.0",
  "description": "",
  "type": "module",
  "main": "myexample.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@m3o/services": "^1.0.497"
  }
}

```

## Publishing a new version of this package

Do not do it. This package is generated and pushed to npm from the `publish` build step of the `github.com/micro/services` repo.
Do not edit this by hand. Generate it and copy it over, that's how files got here in the first place.
