# Movie

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Movie/api](https://m3o.com/Movie/api).

Endpoints:

## Search

Search for movies by simple text search


[https://m3o.com/movie/api#Search](https://m3o.com/movie/api#Search)

```js
const { MovieService } = require('m3o/movie');

const movieService = new MovieService(process.env.M3O_API_TOKEN)

// Search for movies by simple text search
async function searchForMovies() {
	const rsp = await movieService.search({
  "language": "en-US",
  "page": 1,
  "primary_release_year": 2010,
  "query": "inception",
  "region": "US",
  "year": 2010
})
	console.log(rsp)
	
}

searchForMovies()
```
