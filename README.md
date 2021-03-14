# person-service

A simple node.js / express REST service that serves a demo person collection
as JSON records.

## Start Server

Run a native node.js Web server, or execute it in a Docker container.

##### Native

`npm start`  (listens to port 3004)

##### Docker

`npm run docker-start` (listens to port 3004)

## API

The API handles a JSON rendition of a `Person` object or a collection of them. 

##### JSON Person:

```$json

{"id":4,"firstName":"Lizzie","lastName":"Zielinski","email":"lzielinski3@stanford.edu"}

```

##### GET

* `/persons`  - retrieve all persons (unordered)
* `/persons/:id` - return single person keyed by integer id

E.g. fetch all:

`curl http://localhost:3004/persons`

E.g. fetch single person for ID 999:

`curl http://localhost:3004/persons/999`


##### POST

* `/persons` - creates a new person record from the posted `Person` object

Each POST assigns a generated id. The posted `Person.id` is ignored. Multiple
POSTs of a given `Person` result in multiple new records, differing only by id.

E.g. creates new person each time it is issued:

`curl -X PUT -H "Content-Type: application/json" -d '{"id":0,"firstName":"Kayle","lastName":"Mauget","email":"ksneesbyrq@blogger.com"}'  http://localhost:3004/persons`

##### PUT

* `/persons` - updates or creates a new person record from the sent `Person` object.

PUT is idempotent, meaning repeated PUTs persist identical states. Unlike POST, the 
`Person.id` is **not** ignored. Consider a PUT as a command to synchronize a 
repository record to an input reccord.

E.g. updates existing id 999 (adds if not existing)

`curl -X PUT -H "Content-Type: application/json" -d '{"id":1000,"firstName":"Kayle","lastName":"Mauget","email":"ksneesbyrq@blogger.com"}'  http://localhost:3004/persons`

##### DELETE

* `/persons/:id` - deletes single person keyed by integer id

Eg. remooves person for ID 3954:

`curl -X DELETE http://localhost:3004/persons/3954`

## Node Middleware

* express 
* body-parser

## References

* [node express router](https://expressjs.com/en/4x/api.html#router)
* [node body-parser](https://www.npmjs.com/package/body-parser)
* [mockaroo person data](https://www.mockaroo.com/)
* [Lyudmil Latinov blog: Build a REST API with Express on Node.js and run it on Docker](https://automationrhapsody.com/build-rest-api-express-node-js-run-docker/)
