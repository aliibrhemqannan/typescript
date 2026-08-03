

//  1-  public  --- > access from anywhere 
//  2-  private ---> available within the class
//  3-  prodcted ---> availabe within the class & subclasses



class Person { 

    constructor (public  firstName: string , public lastName:string){ 

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

    

}


const student1 = new Student("student1" , "qannan")
const  teacher1 = new Teacher("tec1" , "preffesor")

console.log(student1.student())
console.log(teacher1.teacher())