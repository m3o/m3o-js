# Cron

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Cron/api](https://m3o.com/Cron/api).

Endpoints:

## Schedule

Schedule a cron job


[https://m3o.com/cron/api#Schedule](https://m3o.com/cron/api#Schedule)

```js
const { CronService } = require('m3o/cron');

const cronService = new CronService(process.env.M3O_API_TOKEN)

// Schedule a cron job
async function listJobs() {
	const rsp = await cronService.schedule({})
	console.log(rsp)
	
}

listJobs()
```
## Delete

Delete a cron job


[https://m3o.com/cron/api#Delete](https://m3o.com/cron/api#Delete)

```js
const { CronService } = require('m3o/cron');

const cronService = new CronService(process.env.M3O_API_TOKEN)

// Delete a cron job
async function deleteAjob() {
	const rsp = await cronService.delete({
  "id": "0c8cf9f7-3a61-4e91-b249-00a970044c95"
})
	console.log(rsp)
	
}

deleteAjob()
```
