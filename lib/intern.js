const employee = require ('./employee');

class intern extends employee {
    constructor(name, id, email, school){
        super(name, id, email);

        this.school = school
    }
    getSchool(){
        return (`School: ${this.school}`);
    }
    gitRole() {
        return `intern`
    }
}
module.exports = intern