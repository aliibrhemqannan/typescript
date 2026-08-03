// object oriented programming in Typescript


class Person { 
    // must put defaults values
   readonly  id ?: number ;  //ootional
    name : string ;
    age : number ;

    constructor( name:string, age:number) { 
           this.name = name
           this.age = age 
          

    }
    

    detalis () {
            return this.name+ " " + this.age

    }
    



}

const ali  = new Person("ali" , 22) ;

class Car {}
class Player {}

const mars = new Player()

if (mars instanceof Person)
{ 

    console.log("hello world")
}else if (mars instanceof Car){ 

console.log('it is a car')
}else { 
     console.log("what is instance ? ")
}


