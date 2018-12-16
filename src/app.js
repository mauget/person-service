'use strict';

// @flow

type PersonObj = {
    id: number,
    firstName: string,
    lastName: string,
    email: string
}

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

router.get('/',  (req, res): void  => {
    res.send('Person service listening');
});

router.get('/persons/:id', (req, res): void => {
    const id: number = parseInt(req.params.id);
    const result = personRepo.getById(id);
    res.send(result);
});

router.get('/persons', (req, res): void => {
    const result: Array<PersonObj> = personRepo.getAll();
    res.send(result);
});

router.delete('/persons/:id', (req, res): void => {
    const id: number = parseInt(req.params.id);
    const result: string = personRepo.remove(id);
    res.send(result);
});

// Creates a new person at each call
router.post('/persons', (req, res): void => {
    const person: PersonObj = req.body;
    const result: string = personRepo.create(person);
    res.send(result);
});

// Updates or creates a person
router.put('/persons', (req, res): void => {
    const person: PersonObj = req.body;
    const result: string = personRepo.save(person);
    res.send(result);
});

