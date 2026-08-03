"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Payment {
    currency;
    constructor(currency) {
        this.currency = currency;
    }
    paid() {
        return true;
    }
    nopaid() {
        return false;
    }
}
class PaymentWithUSD extends Payment {
    pay() {
        console.log("pay with USD");
    }
}
class PaymentWithDinar extends Payment {
    pay() {
        console.log("pay with Dinar");
    }
}
const paymentwithDoller = new PaymentWithUSD("USD");
console.log(paymentwithDoller.currency);
paymentwithDoller.pay();
const paymentwithdinar = new PaymentWithDinar("Dinar");
paymentwithdinar.pay();
//# sourceMappingURL=15-Abstract-method.js.map