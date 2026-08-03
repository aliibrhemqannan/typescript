

// Functions in type script


// 1. without return type  ( void type)
function sum1 (num1:number , num2:number) : void {
    const result = num1 + num2 ;
    // console.log("without return type:", result) ;
   
}





// 2. with return type

const sum = (num1:number , num2:number) : number => {
    const result = num1 + num2 ;
    return result; 

}


// without return type  ( void type)
const res2  = sum1(10, 20) ;
console.log( "without return type:", res2) ; // thir return undefined




// with type return 
const  res  = sum(10, 20) ;
console.log("with return type:", res) ;



const getFullName = (firstName:string , lastName:string ) : string => {
    let name: string =  "youssf" ;
    return firstName + " " + lastName ;
}










