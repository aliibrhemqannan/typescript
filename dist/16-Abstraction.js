"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SendEmail {
    from;
    to;
    subject;
    message;
    constructor(from, to, subject, message) {
        this.from = from;
        this.to = to;
        this.subject = subject;
        this.message = message;
    }
    send() {
        this.validateEmailEddress();
        this.validateEmailMessage();
        this.validateEmailSubject();
        console.log("email Send");
    }
    validateEmailEddress() {
        if (!this.from.includes("@") || !this.to.includes("@")) {
            throw new Error("invalid Email Address");
        }
    }
    validateEmailSubject() {
        if (this.subject.length < 2) {
            throw new Error("subject cannot be less than 10 characters");
        }
    }
    validateEmailMessage() {
        if (this.message.length < 10) {
            throw new Error("message cannot be less than 10 characters");
        }
    }
}
const sendEmail = new SendEmail("ali@gmail.com", "adham@gmail.com", "universty", "I don't want send money");
sendEmail.send();
//# sourceMappingURL=16-Abstraction.js.map