// // tsconfig  
// //  // "experimentalDecorators": true,


// //  ********** class Decorators **************

// // decotrators is function 

// function Controller (
//     // must be function parameter
//     constractor : Function
// ) { 
//     // target is mean constructor for that class 
//     console.log("Controller Decorator Called")
//     console.log(constractor)
//     // every object in javascript   has prototype
//     constractor.prototype.endPoint = "api/auth" ;
//     // method 
//     constractor.prototype.Login = ()=> { 
//         console.log("login sucessfuly")
//     }
// }

// // is  running  automatic
// @Controller
// class Auth  { 



// }


// const auth1 = new Auth()
// // to ignor this error 
// // @ts-ignore
// console.log(auth1.endPoint)
// // @ts-ignore

// auth1.Login()

// //   ************** Decratory Factory ********** 
// // we can not add another  parameter 


// // to add prameter   // Decorator Factory 
// function Module (endPoint :string) { 
//     return    (
//     // must be function parameter
//     constractor : Function
// ) => { 
//     // target is mean constructor for that class 
//     console.log("Controller Decorator Called , the first one ")
//     console.log(constractor)
//     // every object in javascript   has prototype
//     constractor.prototype.endPoint = endPoint ;
//     // method 
//     constractor.prototype.Login = ()=> { 
//         console.log("login sucessfuly")
//     }
// }

// }



// @Module("api/book")
// class Book { 

// }


// @Module("api/students")
// class student { 

// }

// const book1 =  new Book () 
// const stu =  new student()
// //@ts-ignore
// console.log(book1.endPoint)


// //@ts-ignore
// console.log(stu.endPoint)


// // ******************  Decorator Composition   one or more decerator for one class 

// function Guard (role:string) { 
//     return  (constractor : Function) => { 
//         console.log(" Guard Decorator Calld  , the second one ")
//         constractor.prototype.role = role ;
//     }

// }

// @Guard("admin")
// @Module("api/auth")  // this run befor Gurad Decorator

// class Auth1 { 

// }






// Method Decorators 

function  Logger( classPrototype:object ,
     methodName:string ,
     descriptor : PropertyDescriptor
    ) { 

       console.log({
        classPrototype,
        methodName ,
        // change the  action of function 
        descriptor
       })

       // change what function do 

    // descriptor.value =  () =>  {
    //     console.log("hellworld")
    // }

    // add the feature for function 
    const orgininalValue =  descriptor.value; 
    descriptor.value = function (speed:number) { 
        console.log("Before Car Moving");
        orgininalValue.call(this,  speed) ;
        console.log("After Car Moving") ;
        
    }


}


class Car { 
    @Logger
    move (speed:number) {
        console.log("the Car is moving speed" + speed) ; 

    }
    stop () { 
        console.log("The Car stopped")

    }
}


const car1 = new Car ()
car1.move(90)

// property Decorators 


function isEmail (classProperty : object , propertyName : string) { 

    let value : string ; 
  const  descriptor : PropertyDescriptor = {
    get () : string  { 
        return value ; 
    } , 
    set (newValue :string) { 

        if (!newValue.includes("@") || !newValue.includes(".com")) { 
            throw new Error("Invalid email address")
        }

        value = newValue ;
    }

    }
 Object.defineProperty(classProperty , propertyName , descriptor)

}

class User { 
    @isEmail
    email : string ;
    constructor (email:string) { 
        this.email = email ; 
    }

}

const youssef = new User("ali@gmail.com")
console.log(youssef.email)

//parameter Decorators


function  Http ( classproperty : object , methodName : string , parameterIndex : number)  {
       console.log({    
        classproperty ,
        methodName ,
        parameterIndex
       })
}

class BookController { 

    getBook (req:object , @Http res : object)  {
        console.log(req, res) 

    }

}