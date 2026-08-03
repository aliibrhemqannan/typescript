// interface product


interface Product<T> { 
   item: T ; 
   name:string; 
   price:number; 
   description: string; 
   login(username:string , password:string): boolean;

}


const loginfunc =(username: string, password: string): boolean =>  {
      if (username == "true" && password == "true") {
         return true
      }
         return false;
      
   }
class  User implements Product<string> {
   item: string = "ali";
   name: string = " mofida";
   price: number = 12;
   description: string = "mohammed"; 
   login = loginfunc;
}



const  user3 = new User () 
console.log("this logic is ggod " ,  user3.login("true" , "true"))



   



//example 2


interface Product1<T>  {
   createProduct(product:T) : T ;
   saveProductToDB(product:T) : T ; 



}


class Product2<K> implements Product1<K> {
   createProduct(product: K): K {
      try { 
         return product ;

      }catch(err) { 

         throw new Error("Method not implemented." + err);
      }
      
   }
   saveProductToDB(product: K): K {
       try { 
         return product ;

      }catch(err) { 

         throw new Error("Method not implemented." + err);
      }
   } 

}
type Book = { 
   title: string, 
   author:string, 
   numberofPages: number, 

   
}

const laptop  = new Product2<Book>() ; 

console.log(
   laptop.createProduct({
   title:"book1" , 
   author:"ali" , 
   numberofPages:23 }
   


)

);