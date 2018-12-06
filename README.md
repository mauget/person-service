# person-service

A simple node.js / express REST service that serves a demo person collection
as JSON records.

## Start Server

Run a native node.js Web server, or execute it in a Docker container.

##### Native

`npm start`  (listens to port 3000)

##### Docker

`npm run docker-start` (listens to port 3000)

## API

The API handles a JSON rendition of a `Person` object or a collection of them. 

##### JSON Person:

```$json

{"id":4,"firstName":"Lizzie","lastName":"Zielinski","email":"lzielinski3@stanford.edu"}

```

##### GET

* `/persons`  - retrieve all persons (unordered)
* `/persons/:id` - return single person keyed by integer id

##### POST

* `/persons` - creates a new person record from the posted `Person` object

Each POST assigns a generated id. The posted `Person.id` is ignored. Multiple
POSTs of a given `Person` result in multiple new records, differing only by id.

##### PUT

* `/persons` - updates or creates a new person record from the sent `Person` object.

PUT is idempotent, meaning repeated PUTs persist identical states. Unlike POST, the 
`Person.id` is **not** ignored. Consider a PUT as a command to synchronize a 
repository record to an input reccord.

##### DELETE

* `/persons/:id` - deletes single person keyed by integer id

## Node Middleware

* express 
* body-parser

## References

*  mockaroo: [Mock API person data](https://www.mockaroo.com/)
*  Lyudmil Latinov: [Build a REST API with Express on Node.js and run it on Docker](https://automationrhapsody.com/build-rest-api-express-node-js-run-docker/)
