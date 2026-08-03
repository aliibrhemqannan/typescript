"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sum1(num1, num2) {
    const result = num1 + num2;
}
const sum = (num1, num2) => {
    const result = num1 + num2;
    return result;
};
const res2 = sum1(10, 20);
console.log("without return type:", res2);
const res = sum(10, 20);
console.log("with return type:", res);
const getFullName = (firstName, lastName) => {
    let name = "youssf";
    return firstName + " " + lastName;
};
//# sourceMappingURL=04-functions.js.map