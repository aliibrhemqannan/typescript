"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Store {
    _products = [];
    add(newProduct) {
        this._products.push(newProduct);
    }
}
class Product1 extends Store {
}
const product = new Product1();
product.add({
    brand: "hp",
    price: 22
});
class Product2 extends Store {
}
const product1 = new Product2();
product.add({
    brand: "hp",
    price: 22
});
//# sourceMappingURL=23-extending-generic-class.js.map