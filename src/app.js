'use strict';

const express = require("express");
const bodyParser = require("body-parser");
const personRoutes = require("./personRoutes");

const PORT = 3000;

const app = new express();

// register JSON parser middleware
app.use(bodyParser.json());

// personRoutes(app);

app.listen(PORT, () => {
    console.log('Person service listening on port ' + PORT);
});
