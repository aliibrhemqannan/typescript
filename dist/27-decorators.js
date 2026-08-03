"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
function Logger(classPrototype, methodName, descriptor) {
    console.log({
        classPrototype,
        methodName,
        descriptor
    });
    const orgininalValue = descriptor.value;
    descriptor.value = function (speed) {
        console.log("Before Car Moving");
        orgininalValue.call(this, speed);
        console.log("After Car Moving");
    };
}
class Car {
    move(speed) {
        console.log("the Car is moving speed" + speed);
    }
    stop() {
        console.log("The Car stopped");
    }
}
__decorate([
    Logger
], Car.prototype, "move", null);
const car1 = new Car();
car1.move(90);
function isEmail(classProperty, propertyName) {
    let value;
    const descriptor = {
        get() {
            return value;
        },
        set(newValue) {
            if (!newValue.includes("@") || !newValue.includes(".com")) {
                throw new Error("Invalid email address");
            }
            value = newValue;
        }
    };
    Object.defineProperty(classProperty, propertyName, descriptor);
}
class User {
    email;
    constructor(email) {
        this.email = email;
    }
}
__decorate([
    isEmail
], User.prototype, "email", void 0);
const youssef = new User("ali@gmail.com");
console.log(youssef.email);
function Http(classproperty, methodName, parameterIndex) {
    console.log({
        classproperty,
        methodName,
        parameterIndex
    });
}
class BookController {
    getBook(req, res) {
        console.log(req, res);
    }
}
__decorate([
    __param(1, Http)
], BookController.prototype, "getBook", null);
//# sourceMappingURL=27-decorators.js.map