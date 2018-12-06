'use strict';

class Person {
    constructor(id, firstName, lastName, email) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }
}

module.exports = Person;
