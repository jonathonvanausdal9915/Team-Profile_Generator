const Employee = require('./Employee');


class Engineer extends Employee {
    constructor(github) {
        this.github = github;
    }

    // setGitHub(github){
    //     this.github = github;
    // }

    // setRole(role){
    //     this.role = role;
    // }

    getGithub() {
        return this.github;
    }

    getRole() {
        return Engineer;
    }

}