
// generic constraints

function getProduct<T extends number | string>(product: T): T {
    return product;
}

const numericProduct = getProduct(42);
const textProduct = getProduct("book");

console.log(numericProduct, textProduct);


interface Book { 
    title : string, 
    desc: string , 
}

interface Laptop { 
    title: string , 
    screen : string,
}

function gtProduct<T extends Book |  Laptop>(product: T): T {
    return product;
}


gtProduct<Book>({
    title: "book" , 
    desc: "book large"
})

gtProduct<Laptop>({
    title:"laptop" , 
    screen: "large", 
})

