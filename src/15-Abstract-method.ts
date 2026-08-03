

/* Abstract class & abstract Method */ 

//online book store website

// Abstract Method just implement within abstract method

// for  solve this issue  we can not make object from this class 
abstract class Payment { 

    constructor(public currency:string){ 

    }

    // roles ,  not do  implementation   
   abstract pay():void ;

   // paid

   protected paid():boolean { 
    return true ; 
   }
     protected nopaid():boolean { 
    return false ; 
   }


}


// to solve the override

//  must make implement  abstract method 

class  PaymentWithUSD extends Payment { 
    

    override pay(): void {
        // USD payment logic ...
        console.log("pay with USD")
    }
  

}



class  PaymentWithDinar extends Payment { 

    
   
    override pay(): void {
        // Dinar payment logic ...
        console.log("pay with Dinar")
        
    }
}



const paymentwithDoller = new PaymentWithUSD("USD")

console.log(paymentwithDoller.currency)
paymentwithDoller.pay()
const paymentwithdinar = new PaymentWithDinar("Dinar")
paymentwithdinar.pay()
