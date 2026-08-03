// type User = { 
// readonly id : number , 
// username: string , 
// isAdmin : boolean , 
// // don't write function here
// getFullName :  (firstName:string , lastName:string) => string 
// }


// const saller : User = { 
//    id : 1 , 
//    username : "ali" , 
//    isAdmin  : true , 
//    getFullName: function (firstName:string , lastName: string) : string{

//     return firstName + "  " + lastName ; 
    
//    }
// }

// console.log(saller.id)

// console.log(saller.getFullName("ali " , "qannan")) ; 


//  access modifier  public is and default  , private , protected 



class Car { 
    // // property
    // readonly id    ?: number = 0 ;  
    // color : string  ;
    // name  : string  ;
    // private _heigh : number  ;  // chanage property just in the class ; 
    // wheels: 2 | 4  ;
    // isRunning : boolean  ; 
    // // must put all variables in constractor
    // constructor ( color: string , name:string , _heigh:number ,wheels : 2 | 4 , isRunning : boolean ){ 
    //     this.color = color ; 
    //     this.name = name ;
    //     this._heigh =  _heigh; 
    //     this.wheels = wheels ; 
    //     this.isRunning = isRunning ;

    // } this first way 

 // Parameter Properties    
    private id:number = 0;
    constructor (
        public color:string ,
        public name:string ,
        private _heigh:number , 
        public wheels : 2 | 4 ,
        public isRunning : boolean,

     ) { 
        this.color = color ;
        this.name = name ; 
        this._heigh = _heigh ; 
        this.wheels = wheels ; 
        this.isRunning = isRunning ; 

    }

    changeHeight () : number{
        
        this._heigh  = this.wheels + this._heigh ; 
        return  this._heigh ; 
    }
    // first way 
    getHeigh () { 
        console.log(this._heigh) ;
    }

    get   heigh () :number { 
        return this._heigh ;
    }
    set heigh (value:number)  {
        if (value <= 0) { 
            throw new Error () ; 
        } 
        else{
                    this._heigh = value ; 


        }
    }
    //
    get  CarId ( ): number{
         return this.id ;  

    }
    set CarId (newValue:number)  { 
        this.id = newValue ; 
    }
    // moifi height
    modifyHeigh (newValue:number) : void { 
        this._heigh = newValue; 
    }

     checkTypes(input: unknown): unknown
 {
    if (typeof input === "string") {
        const str = input.toUpperCase(); 
        return str ;// This will throw an error because 'input' is of type 'any'
    } else if (typeof input === "number") {

         
       return  input.toFixed(); // This will throw an error because 'input' is of type 'any'
    }else if (typeof input === "boolean") { 
        return  input.valueOf(); // This will throw an error because 'input' is of type 'any'

    }
}
}


const mars = new Car( "red" , "mars" , 22 , 2 , true) ; 
 
console.log("this is heigh" , mars.changeHeight() 
)
console.log(mars)
console.log(mars.checkTypes(88))


// modifiyheigh 
mars.modifyHeigh(2334)
// getheight
mars.getHeigh()


//setter
mars.heigh = 20 ;  
//getter
//setter carid 

mars.CarId = 555 ;
console.log("this is car id " , mars.CarId)

console.log(mars.heigh)


