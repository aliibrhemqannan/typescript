class Person { 
    private static _idCounter = 0
    private id: number

    constructor(public lastName: string, public firstName: string) {
        Person._idCounter += 1
        this.id = Person._idCounter
    }

    walk(): void {
        console.log("is running")
    }
}



class Student extends Person { 
   
}


const ali = new Student(
    "ali" , 
 " qannan"
)

const ali2 = new Student(
    "ali" , 
 " qannan"
)


class Teacher  extends Person { 
   

}

const tec1 = new Teacher("tec" , "1")
const tec2  = new Teacher("tec2" , "2")
console.log(tec1)
console.log(tec2)