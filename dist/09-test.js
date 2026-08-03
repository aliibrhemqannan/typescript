"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    lastName;
    firstName;
    static _idCounter = 0;
    id;
    constructor(lastName, firstName) {
        this.lastName = lastName;
        this.firstName = firstName;
        Person._idCounter += 1;
        this.id = Person._idCounter;
    }
    walk() {
        console.log("is running");
    }
}
class Student extends Person {
}
const ali = new Student("ali", " qannan");
const ali2 = new Student("ali", " qannan");
class Teacher extends Person {
}
const tec1 = new Teacher("tec", "1");
const tec2 = new Teacher("tec2", "2");
console.log(tec1);
console.log(tec2);
//# sourceMappingURL=09-test.js.map