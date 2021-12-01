# Otp

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Otp/api](https://m3o.com/Otp/api).

Endpoints:

## Validate

Validate the OTP code


[https://m3o.com/otp/api#Validate](https://m3o.com/otp/api#Validate)

```js
const { OtpService } = require('m3o/otp');

const otpService = new OtpService(process.env.M3O_API_TOKEN)

// Validate the OTP code
async function validateOtp() {
	const rsp = await otpService.validate({
  "code": "656211",
  "id": "asim@example.com"
})
	console.log(rsp)
	
}

validateOtp()
```
## Generate

Generate an OTP (one time pass) code


[https://m3o.com/otp/api#Generate](https://m3o.com/otp/api#Generate)

```js
const { OtpService } = require('m3o/otp');

const otpService = new OtpService(process.env.M3O_API_TOKEN)

// Generate an OTP (one time pass) code
async function generateOtp() {
	const rsp = await otpService.generate({
  "id": "asim@example.com"
})
	console.log(rsp)
	
}

generateOtp()
```
