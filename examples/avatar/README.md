# Avatar

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Avatar/api](https://m3o.com/Avatar/api).

Endpoints:

## Generate




[https://m3o.com/avatar/api#Generate](https://m3o.com/avatar/api#Generate)

```js
const { AvatarService } = require('m3o/avatar');

const avatarService = new AvatarService(process.env.M3O_API_TOKEN)

// 
async function generateAvatarAndReturnBase64stringOfTheAvatar() {
	const rsp = await avatarService.generate({
  "format": "jpeg",
  "gender": "female",
  "upload": false,
  "username": ""
})
	console.log(rsp)
	
}

generateAvatarAndReturnBase64stringOfTheAvatar()
```
## Generate




[https://m3o.com/avatar/api#Generate](https://m3o.com/avatar/api#Generate)

```js
const { AvatarService } = require('m3o/avatar');

const avatarService = new AvatarService(process.env.M3O_API_TOKEN)

// 
async function generateAnAvatarAndUploadTheAvatarToMicrosCdn() {
	const rsp = await avatarService.generate({
  "format": "png",
  "gender": "female",
  "upload": true,
  "username": ""
})
	console.log(rsp)
	
}

generateAnAvatarAndUploadTheAvatarToMicrosCdn()
```
