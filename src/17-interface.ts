/* Interface */ 

// is write just signature  , it's seems Abstract class and abstract method
interface Auth  {
    register(username:string, email:string , password:string):void ;
    login(email:string, password:string ) : void ; 
    role:string; 

}


// implement  ( interface)
class User implements Auth {
    role :string =  "admin" ;
    register(username: string, email: string, password: string): void {
        try{
            console.log(email,password,username) 

        }catch(err){ 

            throw new Error("Method not implemented." +err);
        }
    }
    login(email: string, password: string): void {
       try{
            console.log(email,password) 

        }catch(err){ 

            throw new Error("Method not implemented."+err);
        }
    } 


}

// for object

interface Book { 
    tittle:string ; 
    price: number; 
}

const newBook:Book = { 
    tittle : "book 1", 
    price : 10
}
// inhertanice  just interface with interface
interface Auth2 extends Auth { 

}

class Admin  {}

class User2 extends Admin implements Auth {
    register(username: string, email: string, password: string): void {
        throw new Error("Method not implemented.");
    }
    login(email: string, password: string): void {
        throw new Error("Method not implemented.");
    }
    role: string="admin"; 

}
