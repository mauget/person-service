'use strict';

// @flow


type PersonObj = {
    id: number,
    firstName: string,
    lastName: string,
    email: string
}


class Person {
    id: number;
    firstName: string;
    lastName: string;
    email: string;

    constructor( id: number, firstName: string, lastName: string, email: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
}

module.exports = Person ;
