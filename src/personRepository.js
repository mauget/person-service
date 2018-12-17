'use strict';

// @flow



type PersonObj = {
    id: number,
    firstName: string,
    lastName: string,
    email: string
}

const Person = require('./person');
const data = require('./data');

class PersonRepository {

    persons: Map<number, PersonObj>;

    constructor() {
        this.initMockDBMS();
    }

    initMockDBMS(): void {
        this.persons = new Map();

        data.map( v => {
            const p: Person = new Person(v.id, v.first_name, v.last_name, v.email);
            this.persons.set(v.id, p);
        });

    }

    generateId(): number {
        let id: number;
        do {
            id = parseInt(String(Math.random() * 100000).slice(0, 4));
        } while (this.persons.has(id));
        return id;
    }

    getById(id: number) {
        return this.persons.get(id);
    }

    getAll(): Array<PersonObj> {
        return Array.from(this.persons.values());
    }

    remove(id: number): string {
        if (this.persons.has(id)) {
            this.persons.delete(id)
            return 'Deleted Person id ' + String(id);
        }

        return 'Person not found for id ' + String(id);
    }

    save(person: PersonObj): string {
        const id = person.id;
        if (this.persons.has(id)) {
            this.persons.set(id, person);
            return 'Updated Person with id=' + String(id);
        }

        this.persons.set(id, person);
        return 'Added Person with id=' + String(id);
    }

    create(person: PersonObj): string {
        const id = this.generateId();
        person.id = id;
        this.persons.set(id, person);
        return 'Added Person with id=' + String(id);

    }
}

const personRepository = new PersonRepository();

// export default personRepository;
module.exports = personRepository;
