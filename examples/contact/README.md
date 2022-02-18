# Contact

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Contact/api](https://m3o.com/Contact/api).

Endpoints:

## Update




[https://m3o.com/contact/api#Update](https://m3o.com/contact/api#Update)

```js
const { ContactService } = require('m3o/contact');

const contactService = new ContactService(process.env.M3O_API_TOKEN)

// 
async function updateAcontact() {
	const rsp = await contactService.update({
  "addresses": [
    {
      "label": "company address",
      "location": "123 street address"
    }
  ],
  "birthday": "1995-01-01",
  "emails": [
    {
      "address": "home@example.com",
      "label": "home"
    },
    {
      "address": "work@example.com",
      "label": "work"
    }
  ],
  "id": "42e48a3c-6221-11ec-96d2-acde48001122",
  "links": [
    {
      "label": "blog",
      "url": "https://blog.joe.me"
    }
  ],
  "name": "joe",
  "note": "this person is very important",
  "phones": [
    {
      "label": "home",
      "number": "010-12345678"
    },
    {
      "label": "work",
      "number": "010-87654321"
    }
  ],
  "social_medias": [
    {
      "label": "twitter",
      "username": "joe-twitter"
    },
    {
      "label": "facebook",
      "username": "joe-facebook"
    }
  ]
})
	console.log(rsp)
	
}

updateAcontact()
```
## Read




[https://m3o.com/contact/api#Read](https://m3o.com/contact/api#Read)

```js
const { ContactService } = require('m3o/contact');

const contactService = new ContactService(process.env.M3O_API_TOKEN)

// 
async function getAcontact() {
	const rsp = await contactService.read({
  "id": "42e48a3c-6221-11ec-96d2-acde48001122"
})
	console.log(rsp)
	
}

getAcontact()
```
## Delete




[https://m3o.com/contact/api#Delete](https://m3o.com/contact/api#Delete)

```js
const { ContactService } = require('m3o/contact');

const contactService = new ContactService(process.env.M3O_API_TOKEN)

// 
async function deleteAcontact() {
	const rsp = await contactService.delete({
  "id": "42e48a3c-6221-11ec-96d2-acde48001122"
})
	console.log(rsp)
	
}

deleteAcontact()
```
## List




[https://m3o.com/contact/api#List](https://m3o.com/contact/api#List)

```js
const { ContactService } = require('m3o/contact');

const contactService = new ContactService(process.env.M3O_API_TOKEN)

// 
async function listContactsWithDefaultOffsetAndLimitDefaultLimitIs20() {
	const rsp = await contactService.list({})
	console.log(rsp)
	
}

listContactsWithDefaultOffsetAndLimitDefaultLimitIs20()
```
## List




[https://m3o.com/contact/api#List](https://m3o.com/contact/api#List)

```js
const { ContactService } = require('m3o/contact');

const contactService = new ContactService(process.env.M3O_API_TOKEN)

// 
async function listContactsWithSpecificOffsetAndLimit() {
	const rsp = await contactService.list({
  "limit": 1,
  "offset": 1
})
	console.log(rsp)
	
}

listContactsWithSpecificOffsetAndLimit()
```
## Create




[https://m3o.com/contact/api#Create](https://m3o.com/contact/api#Create)

```js
const { ContactService } = require('m3o/contact');

const contactService = new ContactService(process.env.M3O_API_TOKEN)

// 
async function createAcontact() {
	const rsp = await contactService.create({
  "addresses": [
    {
      "label": "company address",
      "location": "123 street address"
    }
  ],
  "birthday": "1995-01-01",
  "emails": [
    {
      "address": "home@example.com",
      "label": "home"
    },
    {
      "address": "work@example.com",
      "label": "work"
    }
  ],
  "links": [
    {
      "label": "blog",
      "url": "https://blog.joe.me"
    }
  ],
  "name": "joe",
  "note": "this person is very important",
  "phones": [
    {
      "label": "home",
      "number": "010-12345678"
    },
    {
      "label": "work",
      "number": "010-87654321"
    }
  ],
  "social_medias": [
    {
      "label": "twitter",
      "username": "joe-twitter"
    },
    {
      "label": "facebook",
      "username": "joe-facebook"
    }
  ]
})
	console.log(rsp)
	
}

createAcontact()
```
