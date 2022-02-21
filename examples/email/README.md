# Email

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Email/api](https://m3o.com/Email/api).

Endpoints:

## Validate

Validate an email address format


[https://m3o.com/email/api#Validate](https://m3o.com/email/api#Validate)

```js
const { EmailService } = require('m3o/email');

const emailService = new EmailService(process.env.M3O_API_TOKEN)

// Validate an email address format
async function validateEmail() {
	const rsp = await emailService.validate({
  "address": "joe@example.com"
})
	console.log(rsp)
	
}

validateEmail()
```
## Send

Send an email by passing in from, to, subject, and a text or html body


[https://m3o.com/email/api#Send](https://m3o.com/email/api#Send)

```js
const { EmailService } = require('m3o/email');

const emailService = new EmailService(process.env.M3O_API_TOKEN)

// Send an email by passing in from, to, subject, and a text or html body
async function sendEmail() {
	const rsp = await emailService.send({
  "from": "Awesome Dot Com",
  "subject": "Email verification",
  "textBody": "Hi there,\n\nPlease verify your email by clicking this link: $micro_verification_link"
})
	console.log(rsp)
	
}

sendEmail()
```
## Parse

Parse an RFC5322 address e.g "Joe Blogs <joe@example.com>"


[https://m3o.com/email/api#Parse](https://m3o.com/email/api#Parse)

```js
const { EmailService } = require('m3o/email');

const emailService = new EmailService(process.env.M3O_API_TOKEN)

// Parse an RFC5322 address e.g "Joe Blogs <joe@example.com>"
async function parseEmail() {
	const rsp = await emailService.parse({
  "address": "Joe Blogs \u003cjoe@example.com\u003e"
})
	console.log(rsp)
	
}

parseEmail()
```
