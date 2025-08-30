# Documenting what i learnt 

## Mongodb

- Schema is a blueprint or plans for how each document in collection should look / it's just a structure

- Modal is a tool after creating a schema  model is used to deal (update,create, find, delete) documents from a collections

- te object are retrieved from database with find method

<!-- today on 13 August i learned -->
My Journey 🧑‍💻📌 to Best FullStack Developer

what today I learned
1. Mongodb by creating cluster - database - collection
2. connecting my Database and also inserting some documents

<!-- what i learned today -->// strictQuery:false is used to let mongoose know how to handle fields that are not defined in the schema
- you can retrieve data from database by using find method
### express is a function — when you call it, it creates an application object that you’ll use to configure routes, middleware, etc

const cors = require('cors');
Loads the CORS middleware.

CORS = Cross-Origin Resource Sharing.

This is needed when your frontend (say running on http://localhost:5173) wants to make requests to your backend (say http://localhost:3000).

Without it, the browser might block those requests.


morgan is a logger middleware that logs HTTP requests in the console (e.g., method, URL, status code, response time)


app.use(express.static('dist'))
Serves static files (like HTML, CSS, JS, images) from the dist folder.

Example: If you built your frontend React app into dist/, this line makes it


app.use(express.json())
A built-in middleware in Express.

Parses JSON request bodies and makes them available in req.body.

✅ Summary

express → framework for building server.

app = express() → your application/server instance.

express.static('dist') → serve frontend static files.

express.json() → parse JSON request bodies.

morgan → request logger (optional).

cors → allow frontend from other domains/ports to talk to backend.


RegExp = “ignore case, match the name exactly.”

// 5. Handle unknown endpoints/errors (must come AFTER routes)

