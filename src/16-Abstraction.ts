

class SendEmail { 
    constructor(
        public from:string, 
        public to: string, 
        public subject: string, 
        public message:string, 
        
    ){}

    send(){ 
        this.validateEmailEddress();
        this.validateEmailMessage() ; 
        this.validateEmailSubject();
        console.log("email Send")
    }
    private validateEmailEddress(){
        if (!this.from.includes("@") || !this.to.includes("@")) { 
             throw new Error ("invalid Email Address")
        }
    }

    private validateEmailSubject(){
        if(this.subject.length < 2){ 
            throw new Error("subject cannot be less than 10 characters");
        } 
       

    }
    private validateEmailMessage() { 
         if(this.message.length < 10){ 
            throw new Error("message cannot be less than 10 characters");
        } 
       
    }

}



const sendEmail = new SendEmail(
    "ali@gmail.com",
    "adham@gmail.com",
    "universty" , 
    "I don't want send money"



)

sendEmail.send();