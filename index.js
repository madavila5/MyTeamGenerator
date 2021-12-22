const fs = require("fs");
const inquirer = require("inquirer");
 
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const template = require("./src/template");

var employeePrompts = [
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter Manager Office Number',
    },
    {
        type: 'input',
        name: 'username',
        message: "Enter Engineer's GitHub Username",
    },
    {
        type: 'input',
        name: 'school',
        message: "Enter Intern's School",
    }]
class team {
    constructor() {
        this.employee;
        this.managers = [];
        this.engineers = [];
        this.interns = [];
    }

initializePrompts() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Select Employee Role:',
            choices: ['Manager', 'Engineer', 'Intern'],
        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter Employee Name',
            validate: (nameInput) => {
                if (nameInput) {
                return true;
                } else {
                console.log("Please Enter Employee Name");
                return false;
                }
            },
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter Employee ID',
            validate: (idInput) => {
                if (idInput) {
                return true;
                } else {
                console.log("Please Enter Employee ID");
                return false;
                }
            },
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter Employee Email',
            validate: (emailInput) => {
                if (emailInput) {
                return true;
                } else {
                console.log("Please Enter Employee Email");
                return false;
                }
            }
        },
    ]).then((employeeData) => {
        switch (employeeData.role) {
            case 'Manager':
              this.addManager(employeeData);
              break;
            case 'Engineer':
              this.addEngineer(employeeData);
              break;
            case 'Intern':
              this.addIntern(employeeData);
              break;
    }
});
}

    addManager(employeeData) {
        inquirer.prompt(employeePrompts[0])
        .then((office) => {
            let newManager = new Manager(
                employeeData.name,
                employeeData.id,
                employeeData.email,
                office.officeNumber
            );
            this.managers.push(newManager);
            // console.log(this.managers);

            return this.addEmployeesConfirm();
        });
    }

    addEngineer(employeeData) {
        inquirer.prompt(employeePrompts[1])
        .then((github) => {
            let newEngineer = new Engineer(
                employeeData.name,
                employeeData.id,
                employeeData.email,
                github.username
            );
            this.engineers.push(newEngineer);
            // console.log(newEngineer);

            return this.addEmployeesConfirm();
        });
    }

    addIntern(employeeData) {
        inquirer.prompt(employeePrompts[2])
        .then((school) => {
            let newIntern = new Intern(
                employeeData.name,
                employeeData.id,
                employeeData.email,
                school.school
            );
            this.interns.push(newIntern);
            // console.log(newIntern);

            return this.addEmployeesConfirm();
        });
    }

    addEmployeesConfirm() {
        inquirer.prompt(
            {
                type: 'confirm',
                name: 'addConfirm',
                message: 'Do You Want To Add Another Employee?',
                default: true
            })
        .then(({addConfirm}) => {
            if(addConfirm) {
                this.initializePrompts();
            } else {
                const pageHTML = generatePage(this.managers, this.engineers, this.interns)
                console.log('==========================');
                console.log(this.managers, this.engineers, this.interns);                 
                fs.writeFile('./dist/index.html', pageHTML, err => {
                    if (err) throw new Error(err);
                console.log('Your Team Profile has been GENERATED! Check out index.html in this directory to see it.');
            })
        }
    })
}
}

new team().initializePrompts();