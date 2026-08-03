type Laptop = { 
    brand: string , 
    price:number 
}


class Store<P>  {
    private _products : P[] = [] ; 
    
    // add new product
    add(newProduct : P) : void { 
        this._products.push(newProduct)
    }
}


// example 1 
class Product1 extends Store<Laptop>  { 

}

const product  = new Product1() ; 
product.add({
    brand:"hp" , 
    price: 22
 })


//example 2 

class Product2<K> extends Store<K> { 

}
const product1 = new Product2<Laptop>() ;

product.add({
    brand:"hp" , 
    price: 22
 })