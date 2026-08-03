"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    color;
    name;
    _heigh;
    wheels;
    isRunning;
    id = 0;
    constructor(color, name, _heigh, wheels, isRunning) {
        this.color = color;
        this.name = name;
        this._heigh = _heigh;
        this.wheels = wheels;
        this.isRunning = isRunning;
        this.color = color;
        this.name = name;
        this._heigh = _heigh;
        this.wheels = wheels;
        this.isRunning = isRunning;
    }
    changeHeight() {
        this._heigh = this.wheels + this._heigh;
        return this._heigh;
    }
    getHeigh() {
        console.log(this._heigh);
    }
    get heigh() {
        return this._heigh;
    }
    set heigh(value) {
        if (value <= 0) {
            throw new Error();
        }
        else {
            this._heigh = value;
        }
    }
    get CarId() {
        return this.id;
    }
    set CarId(newValue) {
        this.id = newValue;
    }
    modifyHeigh(newValue) {
        this._heigh = newValue;
    }
    checkTypes(input) {
        if (typeof input === "string") {
            const str = input.toUpperCase();
            return str;
        }
        else if (typeof input === "number") {
            return input.toFixed();
        }
        else if (typeof input === "boolean") {
            return input.valueOf();
        }
    }
}
const mars = new Car("red", "mars", 22, 2, true);
console.log("this is heigh", mars.changeHeight());
console.log(mars);
console.log(mars.checkTypes(88));
mars.modifyHeigh(2334);
mars.getHeigh();
mars.heigh = 20;
mars.CarId = 555;
console.log("this is car id ", mars.CarId);
console.log(mars.heigh);
//# sourceMappingURL=06-accessmodifier.js.map