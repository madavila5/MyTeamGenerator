const fs = require('fs');
const inquirer = require('inquirer');

const employee = require('./lib/employee');
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const template = require('./src/template');

var employeePrompt = [
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter Manager Office Number',
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter Engineer GitHub Username',
    },
    {
        type: 'input',
        name: 'school',
        messagel: "Enter Intern's School",
    }
]

class team {
    constructor(){
        this.employee;
        this.managers = [];
        this.engineers = [];
        this.interns = [];
    }
}

initializePrompts() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Select the Employee Role:',
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
                    console.log ('Please Enter Employee Name');
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
                    console.log('Please Enter Employee ID');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter Employee Email',
            validate: (emailIput) => {
                if (emailIput) {s
                    return true;
                } else {
                    console.log ('Please Enter Employee Email');
                    return false;
                }
            },
        },
    ]).then ((employeeData)=> {
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

}


new team().initializePrompts();