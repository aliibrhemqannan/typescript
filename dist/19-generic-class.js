"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(name, age) {
    }
}
const product1 = new Product("aliqannan", 22);
const product2 = new Product(true, 22);
const product3 = new Product([1, 2, 3], "string");
class Pair {
    first;
    second;
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    swap() {
        return new Pair(this.second, this.first);
    }
    toString() {
        return `Pair(${String(this.first)}, ${String(this.second)})`;
    }
}
const pair1 = new Pair(1, 'one');
console.log(pair1.toString());
const pair2 = pair1.swap();
console.log(pair2.toString());
class IdContainer {
    items = [];
    add(item) {
        this.items.push(item);
    }
    findById(id) {
        return this.items.find(i => i.id === id);
    }
}
const container = new IdContainer();
container.add({ id: 1, name: 'Alice' });
console.log(container.findById(1));
class Box {
    value;
    constructor(value) {
        this.value = value;
    }
}
const defaultBox = new Box('hello');
const numBox = new Box(42);
console.log(defaultBox.value, numBox.value);
//# sourceMappingURL=19-generic-class.js.map