"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    id;
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    detalis() {
        return this.name + " " + this.age;
    }
}
const ali = new Person("ali", 22);
class Car {
}
class Player {
}
const mars = new Player();
if (mars instanceof Person) {
    console.log("hello world");
}
else if (mars instanceof Car) {
    console.log('it is a car');
}
else {
    console.log("what is instance ? ");
}
//# sourceMappingURL=05-oop.js.map