// polymorphism 






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


// Student
class Student extends Person { 

    student () { 
        this.drinkcoffe() ; 
        console.log("this is student" + this.firstName)
    }

      override get  fullName () : string{ 
        return "Student:" + super.fullName;
     }

}


//Teacher
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


const student1 = new Student("ali" , "qannan")
const  teacher1 = new Teacher("ali" , "qannan")


const  people:Person[] =[student1 , teacher1]


for (let person of people) { 
    console.log(person)
}

