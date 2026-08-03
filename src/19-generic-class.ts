// example for generic class

class Product <T,U> { 
	constructor(name:T , age:U){ 

	}
}

const product1 = new Product<string,number>("aliqannan" , 22)
const product2 = new Product<boolean,number>(true,22)
const product3 = new Product<number[],string>([1,2,3] , "string")


// A simple generic Pair class that holds two values of (possibly) different types
class Pair<T, U> {
	constructor(public first: T, public second: U) {}

	swap(): Pair<U, T> {
		return new Pair(this.second, this.first);
	}

	toString(): string {
		return `Pair(${String(this.first)}, ${String(this.second)})`;
	}
}

// Usage examples
const pair1 = new Pair<number, string>(1, 'one');
console.log(pair1.toString()); // Pair(1, one)

const pair2 = pair1.swap();
console.log(pair2.toString()); // Pair(one, 1)

// Generic constraint example: container for items that have an id
interface HasId {
	id: number;
}

class IdContainer<T extends HasId> {
	private items: T[] = [];

	add(item: T) {
		this.items.push(item);
	}

	findById(id: number): T | undefined {
		return this.items.find(i => i.id === id);
	}
}

const container = new IdContainer<{ id: number; name: string }>();
container.add({ id: 1, name: 'Alice' });
console.log(container.findById(1)); // { id: 1, name: 'Alice' }

// Default type parameter
class Box<T = string> {
	constructor(public value: T) {}
}

const defaultBox = new Box('hello'); // T inferred as string
const numBox = new Box<number>(42);
console.log(defaultBox.value, numBox.value);
