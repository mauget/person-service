'use strict';

const Person = require('./person');

class PersonRepository {
    constructor() {
        this.persons = new Map([
            [1, new Person(1, 'FN1', 'LN1', 'email1@email.na')],
            [2, new Person(2, 'FN2', 'LN2', 'email2@email.na')],
            [3, new Person(3, 'FN3', 'LN3', 'email3@email.na')],
            [4, new Person(4, 'FN4', 'LN4', 'email4@email.na')]
        ]);
    }

    generateId() {
        let id;
        do {
            id = parseInt(String(Math.random() * 100000).slice(0, 4));
        } while (this.persons.has(id));
        return id;
    }

    getById(id) {
        return this.persons.get(id);
    }

    getAll() {
        return Array.from(this.persons.values());
    }

    remove(id) {
        if (this.persons.has(id)) {
            this.persons.delete(id)
            return 'Deleted Person id ' + id;
        }

        return 'Person not found for id ' + id;
    }

    save(person) {
        const id = person.id;
        if (this.persons.has(id)) {
            this.persons.set(id, person);
            return 'Updated Person with id=' + id;
        }

        this.persons.set(id, person);
        return 'Added Person with id=' + id;
    }

    create(person) {
        const id = this.generateId();
        person.id = id;
        this.persons.set(id, person);
        return 'Added Person with id=' + id;

    }
}

const personRepository = new PersonRepository();

module.exports = personRepository;
