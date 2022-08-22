const Employee = require("./Employee");


class Manager {
    constructor(name, id, email, officeNumber) {
        
        super(name, id , email);

        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}