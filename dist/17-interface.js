"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    role = "admin";
    register(username, email, password) {
        try {
            console.log(email, password, username);
        }
        catch (err) {
            throw new Error("Method not implemented." + err);
        }
    }
    login(email, password) {
        try {
            console.log(email, password);
        }
        catch (err) {
            throw new Error("Method not implemented." + err);
        }
    }
}
const newBook = {
    tittle: "book 1",
    price: 10
};
class Admin {
}
class User2 extends Admin {
    register(username, email, password) {
        throw new Error("Method not implemented.");
    }
    login(email, password) {
        throw new Error("Method not implemented.");
    }
    role = "admin";
}
//# sourceMappingURL=17-interface.js.map