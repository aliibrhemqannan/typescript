"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() {
        console.log("is walking");
    }
    drinkcoffe() {
        console.log("drink coffe now ");
    }
}
class Student extends Person {
    student() {
        this.drinkcoffe();
        console.log("this is student" + this.firstName);
    }
    get fullName() {
        return "Student:" + super.fullName;
    }
}
class Teacher extends Person {
    teacher() {
        this.drinkcoffe();
        console.log("this is teacher" + this.firstName);
    }
    get fullName() {
        return "Teacher:" + super.fullName;
    }
}
const student1 = new Student("ali", "qannan");
const teacher1 = new Teacher("ali", "qannan");
const people = [student1, teacher1];
for (let person of people) {
    console.log(person);
}
//# sourceMappingURL=13-polymorfisim.js.map