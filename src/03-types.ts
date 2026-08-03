// javascript
// string, number, boolean, null, undefined, symbol, bigint;

//typescript types
// any, unknown, never, void, object, array, tuple, enum, literal, union, intersection, type alias, interface


let price:number =5 ;

// Any Type
let tittle:any  =  10 ;   // here is dynamic type of variable
tittle = "mosa" ; 

tittle = true ;
// if not give data type to variable then it will be any
let book ; 

book = "programming" ; 

book = 1 ; 

// don't use any type because it will not give you the best practice

function logger (input:any ) { 
    console.log(input) ;
}


// Arrays in Typescript

// Array of Numbers
let numbers:number[] = [1,2,3,4,5] ;
numbers.push(12)

// Array of Strings
let names:string[] = ["mona", "mosa", "mohamed"] ;

// Array of Booleans
let isIValid:boolean[] = [true, false, true] ;

// Array of Any Type
let data:any[] = [1, "mona", true, null] ;

// Tuples in Typescript

const person:[string, number] = ["mona", 25] ;


//  can change the value of object or array
const players: string[] = ["mona", "mosa", "mohamed"] ;

players.push("mofida")

console.log(players) ;

// this tuple is fixed in size and type, so you can't add more elements to it or change the type of its elements
// const  user: [number , string] = [1, "mona" ] ;

const user1: [number , string , boolean] = [2, "mosa" , true] ;

console.log(user1[0]) ;

// Enum in Typescript

// javascript way 
const small   = 0 ; 
const medium  = 1 ; 
const larage  = 2 ;
// i can assign string values to enum members as well
// i can also assign values to enum members, if i don't assign values to enum members, they will be assigned numeric values starting from 0 by default.

// the varilable start with 0  
// spacify
enum Size { 
    small = 1000 ,
    medium = 3000 ,
    larage = 4000
}
// for loop to iterate over the enu values
for (let size in Size) {
    console.log(size) ;
}

// 
const mySize: Size = Size.medium ;

console.log(mySize) ;

// to run javascript file in terminal use this command
// node dist/03-types.js


//objects in Typescript
const user :  {
    id: number;
    username: string;
    isAdmin: boolean;
    email: string;
    password: string;
    //add function
    getFullName : (firstName: string, lastName: string) => string;
}  = { 

    id : 1 , 
    username: "mona" ,
    isAdmin: true,
    email: "email", 
    password: "123",
    // define function here
    getFullName : function (firstName: string, lastName: string): string {
        return firstName + " " + lastName;
    }


}



// Type Aliases in Typescript
// object
type User = { 
    readonly id: number, // just read the proparty , and can't change the id 
    username?: string, // optional property
    isAdmin: boolean,
    email: string,
    password: string,
    getFullName : (firstName: string, lastName: string) => string;

}


const user4: User = {
    id: 1,
    // username: "mona",
    isAdmin: true,
    email: "email",
    password: "123",
    getFullName: function (firstName: string, lastName: string): string {
        return firstName + " " + lastName;
    }

 } 



 // Union Types in Typescript
let reviews : string | number  = 5 ;  // is very useful when you want to  allow a variable to assign mutliple values of datatypes


//
const getRating = (rating: string | number , age:number | boolean) : string | number => {
    if (typeof rating === "string") {
        return "Rating is a string: " + rating  + " and age is a number: " + typeof(age);
    }else{
        return "Rating is a number: " + rating + " and age is a number: " + typeof(age);
    }

}

const result = getRating(5, true) ;
console.log(result) ;

const result2 = getRating("5", 25) ;
console.log(result2) ;


// intersection Types in Typescript


type Details = { 
    tittle: string,
    description: string,
    price: number
}

type Auther = { 
    authrName: string,
    country: string
}

type  Book = Details & Auther ; // intersection type


const book1: Book = {
    tittle: "TypeScript Guide",
    description: "A comprehensive guide to TypeScript",
    price: 29.99,
    authrName: "John Doe",
    country: "USA"
}


// literal type
// just accept the 10 , 20 
let prices: 10 | 20 = 10 ;
prices = 20 ; // valid
console.log(prices) ;

const getFullName1 = (firstName: string, lastName: string): string => {
    return firstName + " " + lastName + " gannan";
}

type Saller = { 
    id : number,
    name: string,
    role: "admin" | "user" | "guest" // literal type
    getFullName: (firstName: string, lastName: string) => string;
}



const saller: Saller = {
    id: 1,
    name: "mona",
    role: "admin",
    getFullName: getFullName1
}


console.log(saller.getFullName("mona", "mosa")) ;



// unknown type

function checkTypes(input: unknown): unknown
 {
    if (typeof input === "string") {
        const str = input.toUpperCase(); 
        return str ;// This will throw an error because 'input' is of type 'any'
    } else if (typeof input === "number") {
         
        input.toFixed(); // This will throw an error because 'input' is of type 'any'
    }else if (typeof input === "boolean") { 
        input.valueOf(); // This will throw an error because 'input' is of type 'any'

    }
}
const check = checkTypes("mona") ;
const check2 = checkTypes(10) ;
console.log(check) ;
console.log(check2)

// never type

function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
}




