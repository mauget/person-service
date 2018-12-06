'use strict';

const Person = require('./person');
const data = require('./data');

class PersonRepository {
    constructor() {
        this.initMockDBMS();
    }

    initMockDBMS() {
        this.persons = new Map();

        data.map( v => {
            const p = new Person(v.id, v.first_name, v.last_name, v.email);
            this.persons.set(v.id, p);
            // console.log(this.persons.get(v.id));
        });

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
