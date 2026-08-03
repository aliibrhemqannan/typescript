"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let price = 5;
let tittle = 10;
tittle = "mosa";
tittle = true;
let book;
book = "programming";
book = 1;
function logger(input) {
    console.log(input);
}
let numbers = [1, 2, 3, 4, 5];
numbers.push(12);
let names = ["mona", "mosa", "mohamed"];
let isIValid = [true, false, true];
let data = [1, "mona", true, null];
const person = ["mona", 25];
const players = ["mona", "mosa", "mohamed"];
players.push("mofida");
console.log(players);
const user1 = [2, "mosa", true];
console.log(user1[0]);
const small = 0;
const medium = 1;
const larage = 2;
var Size;
(function (Size) {
    Size[Size["small"] = 1000] = "small";
    Size[Size["medium"] = 3000] = "medium";
    Size[Size["larage"] = 4000] = "larage";
})(Size || (Size = {}));
for (let size in Size) {
    console.log(size);
}
const mySize = Size.medium;
console.log(mySize);
const user = {
    id: 1,
    username: "mona",
    isAdmin: true,
    email: "email",
    password: "123",
    getFullName: function (firstName, lastName) {
        return firstName + " " + lastName;
    }
};
const user4 = {
    id: 1,
    isAdmin: true,
    email: "email",
    password: "123",
    getFullName: function (firstName, lastName) {
        return firstName + " " + lastName;
    }
};
let reviews = 5;
const getRating = (rating, age) => {
    if (typeof rating === "string") {
        return "Rating is a string: " + rating + " and age is a number: " + typeof (age);
    }
    else {
        return "Rating is a number: " + rating + " and age is a number: " + typeof (age);
    }
};
const result = getRating(5, true);
console.log(result);
const result2 = getRating("5", 25);
console.log(result2);
const book1 = {
    tittle: "TypeScript Guide",
    description: "A comprehensive guide to TypeScript",
    price: 29.99,
    authrName: "John Doe",
    country: "USA"
};
let prices = 10;
prices = 20;
console.log(prices);
const getFullName1 = (firstName, lastName) => {
    return firstName + " " + lastName + " gannan";
};
const saller = {
    id: 1,
    name: "mona",
    role: "admin",
    getFullName: getFullName1
};
console.log(saller.getFullName("mona", "mosa"));
function checkTypes(input) {
    if (typeof input === "string") {
        const str = input.toUpperCase();
        return str;
    }
    else if (typeof input === "number") {
        input.toFixed();
    }
    else if (typeof input === "boolean") {
        input.valueOf();
    }
}
const check = checkTypes("mona");
const check2 = checkTypes(10);
console.log(check);
console.log(check2);
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
//# sourceMappingURL=03-types.js.map