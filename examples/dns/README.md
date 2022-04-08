# Dns

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Dns/api](https://m3o.com/Dns/api).

Endpoints:

## Query

Query an addresss


[https://m3o.com/dns/api#Query](https://m3o.com/dns/api#Query)

```js
const { DnsService } = require('m3o/dns');

const dnsService = new DnsService(process.env.M3O_API_TOKEN)

// Query an addresss
async function makeAdnsQuery() {
	const rsp = await dnsService.query({
  "name": "google.com"
})
	console.log(rsp)
	
}

makeAdnsQuery()
```
