"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getProduct(product) {
    return product;
}
const numericProduct = getProduct(42);
const textProduct = getProduct("book");
console.log(numericProduct, textProduct);
function gtProduct(product) {
    return product;
}
gtProduct({
    title: "book",
    desc: "book large"
});
gtProduct({
    title: "laptop",
    screen: "large",
});
//# sourceMappingURL=22-generic-constraints.js.map