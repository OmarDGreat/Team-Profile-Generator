const Employee = require("./Employee");


class Engineer {
    constructor(name, id, email, github) {
        
        super(name, id , email);

        this.github = github;
    }

    gitHub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}