'use strict';

const express = require("express");
const bodyParser = require("body-parser");
const personRepo = require("./personRepository");

const PORT = 3000;

const app = new express();

// register JSON parser middleware
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log('Person service listening');
});

const router = app;

router.get('/', function (req, res) {
    res.send('Person service listening');
});

router.get('/persons/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const result = personRepo.getById(id);
    res.send(result);
});

router.get('/persons', (req, res) => {
    const result = personRepo.getAll();
    res.send(result);
});

router.delete('/persons/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const result = personRepo.remove(id);
    res.send(result);
});

// Creates a new person at each call
router.post('/persons', (req, res) => {
    const person = req.body;
    const result = personRepo.create(person);
    res.send(result);
});

// Updates or creates a person
router.put('/persons', (req, res) => {
    const person = req.body;
    const result = personRepo.save(person);
    res.send(result);
});

