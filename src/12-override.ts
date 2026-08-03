

//  1-  public  --- > access from anywhere 
//  2-  private ---> available within the class
//  3-  prodcted ---> availabe within the class & subclasses



class Person { 

    constructor (public  firstName: string ,  protected lastName:string){ 

    }


    get  fullName () : string{ 
        return this.firstName +" " +  this.lastName
     }

    walk () { 
        console.log("is walking")
    }

   protected drinkcoffe(){ 
        console.log("drink coffe now ")
    }
}



class Student extends Person { 

    student () { 
        this.drinkcoffe() ; 
        console.log("this is student" + this.firstName)
    }
}

class Teacher extends Person { 

    teacher () { 
        this.drinkcoffe() ; 
        console.log("this is teacher" + this.firstName)
    }

    // override the function   and use the feature in other function 
        // "noImplicitOverride": true, in ts config to  force you  to use override
    override get  fullName () : string{ 
        return "Teacher:" + super.fullName;
     }

    

}


const student1 = new Student("student1" , "qannan")
const  teacher1 = new Teacher("tec1" , "preffesor")

console.log(teacher1.fullName)