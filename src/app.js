'use strict';

// @flow

// This module is an example of using the comment-form of flow annotation.
// The flow server does not strip these annotations.
// They're identical to normal flow annotations' action.

/*::
type PersonObj = {
    id: number,
    firstName: string,
    lastName: string,
    email: string
}
*/

const express = require("express");
const bodyParser = require("body-parser");
const personRepo = require("./personRepository");

const PORT: number = 3004;
const HEADERS = {
    'Access-Control-Allow-Origin': '*'
};

function setHeaders(res, headers) {
    Object.keys(headers).forEach(k => res.set(k, headers[k]));
}

const app = new express();

// register JSON parser middleware
app.use(bodyParser.json());

app.listen(PORT, ()/*: void*/ => {
    console.log('Person service listening');
});

const router = app;

router.get('/',  (req, res)/*: void */ => {
    setHeaders(res, HEADERS);
    res.send('Person service listening');
});

router.get('/persons/:id', (req, res)/*: void*/ => {
    const id = parseInt(req.params.id);
    const result = personRepo.getById(id);
    setHeaders(res, HEADERS);
    res.send(result);
});

router.get('/persons', (req, res)/*: void*/ => {
    const result = personRepo.getAll();
    setHeaders(res, HEADERS);
    res.send(result);
});

router.delete('/persons/:id', (req, res)/*: void*/ => {
    const id: number = parseInt(req.params.id);
    const result: string = personRepo.remove(id);
    res.send(result);
});

// Creates a new person at each call
router.post('/persons', (req, res)/*: void*/ => {
    const person: PersonObj = req.body;
    const result: string = personRepo.create(person);
    res.send(result);
});

// Updates or creates a person
router.put('/persons', (req, res)/*: void*/ => {
    const person: PersonObj = req.body;
    const result: string = personRepo.save(person);
    res.send(result);
});

