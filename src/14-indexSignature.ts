// Index Signature 


// the problem 
// const  user = {} 

// user.name = "ali" ;   // here the error


// dynamic propery 


class User {
    // index signature propery 
     [key:string]  :string | boolean; 

}


// here I can add propery 
const user = new User() ;

user.name = "ali" ; 
user.email = "ali@gmail.com" ; 
user.isAdmin = true ;
user["family"] = "allawi" ;
console.log(user)



