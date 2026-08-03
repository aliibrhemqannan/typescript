"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    firstName;
    _lastName;
    constructor(firstName, _lastName) {
        this.firstName = firstName;
        this._lastName = _lastName;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(newValue) {
        if (newValue == "ali") {
            throw new Error("Invalid last name");
        }
        else {
            this._lastName = newValue;
        }
    }
    walk() {
        console.log("walk now");
    }
}
const person1 = new Person("ali ", "qannan");
class Student extends Person {
    studentId;
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
}
const ali = new Student(1, "ali", "qannan");
ali.firstName = "ali";
ali.lastName = "qannan";
ali.walk();
//# sourceMappingURL=08-inheritance.js.map