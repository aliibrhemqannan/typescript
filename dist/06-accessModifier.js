"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const saller = {
    id: 1,
    username: "ali",
    isAdmin: true,
    getFullName: function (firstName, lastName) {
        return firstName + "  " + lastName;
    }
};
console.log(saller.id);
console.log(saller.getFullName("ali ", "qannan"));
class Car {
    id;
    color;
    name;
    heigh;
    wheels;
    isRunning;
    constractor(color, name, heigh, wheels, isRunning) {
        this.color = color;
        this.name = name;
        this.heigh = heigh;
        this.wheels = wheels;
        this.isRunning = isRunning;
    }
}
const mars = new Car("red", "mars", 22, 2, true);
console.log(marst);
//# sourceMappingURL=06-accessModifier.js.map