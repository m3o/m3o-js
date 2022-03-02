# Password

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Password/api](https://m3o.com/Password/api).

Endpoints:

## Generate

Generate a strong random password. Use the switches to control which character types are included, defaults to using all of them


[https://m3o.com/password/api#Generate](https://m3o.com/password/api#Generate)

```js
const { PasswordService } = require('m3o/password');

const passwordService = new PasswordService(process.env.M3O_API_TOKEN)

// Generate a strong random password. Use the switches to control which character types are included, defaults to using all of them
async function generatePassword() {
	const rsp = await passwordService.generate({
  "length": 16
})
	console.log(rsp)
	
}

generatePassword()
```
## Generate

Generate a strong random password. Use the switches to control which character types are included, defaults to using all of them


[https://m3o.com/password/api#Generate](https://m3o.com/password/api#Generate)

```js
const { PasswordService } = require('m3o/password');

const passwordService = new PasswordService(process.env.M3O_API_TOKEN)

// Generate a strong random password. Use the switches to control which character types are included, defaults to using all of them
async function generatePasswordWithoutSpecialCharacters() {
	const rsp = await passwordService.generate({
  "length": 16,
  "lowercase": true,
  "numbers": true,
  "special": false,
  "uppercase": true
})
	console.log(rsp)
	
}

generatePasswordWithoutSpecialCharacters()
```
