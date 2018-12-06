'use strict';

const express = require("express");
const bodyParser = require("body-parser");
const personRepo = require("./personRepository");

const PORT = 3000;

const app = new express();

// register JSON parser middleware
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log('Person service listening on port ' + PORT);
});

const router = (function(a) {

    a.get('/', function (req, res) {
        res.send('Person service listening on port ' + PORT);
    });

    a.get('/persons/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const result = personRepo.getById(id);
        res.send(result);
    });

    a.get('/persons', (req, res) => {
        const result = personRepo.getAll();
        res.send(result);
    });

    a.delete('/persons/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const result = personRepo.remove(id);
        res.send(result);
    });

    // Creates a new person at each call
    a.post('/persons', (req, res) => {
        const person = req.body;
        const result = personRepo.create(person);
        res.send(result);
    });

    // Updates or creates a person
    a.put('/persons', (req, res) => {
        const person = req.body;
        const result = personRepo.save(person);
        res.send(result);
    });


});

router(app);

