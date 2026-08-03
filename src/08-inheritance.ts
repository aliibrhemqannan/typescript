class Person { 
    constructor (public firstName:string , private _lastName:string) { 

    }
   //getter 
    get lastName():string { 
        return this._lastName; 
    }

    //setter
    set lastName(newValue:string) { 

            if (newValue == "ali") { 
               throw new Error("Invalid last name"); 
                
            }
            else{ 
                
                this._lastName = newValue ;


            }
    }

    walk () { 
        
        console.log("walk now")

    }


}


const  person1 = new Person("ali " , "qannan")


class Student extends Person { 

    // in
    
   constructor(public studentId: number,  firstName: string,   lastName: string) {
      super(firstName, lastName);
   }
}



const ali = new  Student(1 , "ali" , "qannan") 
ali.firstName = "ali" ;

ali.lastName = "qannan" ; 


ali.walk()