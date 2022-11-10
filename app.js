const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern.js');
const generateSite = require('./src/genearate-site');
const fs = require("fs");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const teamMembers = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter your employee ID',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter your office number',
        }
        
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber)
        teamMembers.push(manager);
        promptMenu();
    })
};
const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Pleaes select which option you would like to continue with',
            choices: ['add an engineer', 'add an intern', 'finish building my team']
        }
]).then(userChoices => {
    switch (userChoices.menu) {
        case " add an engineer":
            promptEngineer();
            break;
            case "add an intern":
            promptIntern();
            break;
            default:
                buildTeam();
    }

});
};
const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the engineer?',
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter your employee ID',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your github username?',
        }
        
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.officeNumber)
        teamMembers.push(engineer);
        promptMenu();
    })
};
const buildTeam = () => {
     if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUT_DIR)
     }
     fs.writeFileSync(outputPath, generateSite(teamMembers), 'utf-8');
}
promptManager();