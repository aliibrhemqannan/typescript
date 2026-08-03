"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loginfunc = (username, password) => {
    if (username == "true" && password == "true") {
        return true;
    }
    return false;
};
class User {
    item = "ali";
    name = " mofida";
    price = 12;
    description = "mohammed";
    login = loginfunc;
}
const user3 = new User();
console.log("this logic is ggod ", user3.login("true", "true"));
class Product2 {
    createProduct(product) {
        try {
            return product;
        }
        catch (err) {
            throw new Error("Method not implemented." + err);
        }
    }
    saveProductToDB(product) {
        try {
            return product;
        }
        catch (err) {
            throw new Error("Method not implemented." + err);
        }
    }
}
const laptop = new Product2();
console.log(laptop.createProduct({
    title: "book1",
    author: "ali",
    numberofPages: 23
}));
//# sourceMappingURL=21-interfaces.js.map