"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
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
}
class Teacher extends Person {
    teacher() {
        this.drinkcoffe();
        console.log("this is teacher" + this.firstName);
    }
}
const student1 = new Student("student1", "qannan");
const teacher1 = new Teacher("tec1", "preffesor");
console.log(student1.student());
console.log(teacher1.teacher());
//# sourceMappingURL=11-prodcted_modifier.js.map